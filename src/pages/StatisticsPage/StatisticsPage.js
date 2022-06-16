import React, { useState, useEffect } from 'react';
import { VictoryTheme } from 'victory';
import { Typography, Paper, Box } from '@material-ui/core';
import NewSubscribersChart from "./NewSubscribersChart";
import SubscribersByThemeChart from "./SubscribersByThemeChart";
import SubscribersByLocationChart from "./SubscribersByLocationChart";
import ActivitiesByThemeChart from "./ActivitiesByThemeChart";
import ActivitiesByServiceChart from "./ActivitiesByServiceChart";

const StatisticsPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [activitiesByTheme, setActivitiesByTheme] = useState([]);
  const [activitiesByService, setActivitiesByService] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_MIDDLEWARE_URL + 'statistics/subscriptions')
      .then(res => res.ok && res.json())
      .then(json => json && setSubscriptions(json));
  }, [setSubscriptions]);

  useEffect(() => {
    fetch(process.env.REACT_APP_MIDDLEWARE_URL + 'sparql', {
      method: 'POST',
      body: `
        PREFIX as: <https://www.w3.org/ns/activitystreams#>
        PREFIX ldp: <http://www.w3.org/ns/ldp#>
        SELECT ?botUri ?published
        WHERE {
          <${process.env.REACT_APP_MIDDLEWARE_URL}bots> ldp:contains ?botUri .
          ?announceUri a as:Announce .
          ?announceUri as:actor ?botUri .
          ?announceUri as:published ?published .
        }
      `,
      headers: {
        accept: 'application/ld+json'
      }
    })
    .then(res => res.ok && res.json())
    .then(json => json && setActivitiesByTheme(json.map(r => ({ botUri: r.botUri.value, published: r.published.value }))));
  }, [setActivitiesByTheme]);

  useEffect(() => {
    fetch(process.env.REACT_APP_MIDDLEWARE_URL + 'sparql', {
      method: 'POST',
      body: `
        PREFIX as: <https://www.w3.org/ns/activitystreams#>
        PREFIX ldp: <http://www.w3.org/ns/ldp#>
        SELECT ?serviceUri ?published
        WHERE {
          <${process.env.REACT_APP_MIDDLEWARE_URL}services> ldp:contains ?serviceUri .
          ?createUri a as:Create .
          ?createUri as:actor ?serviceUri .
          ?createUri as:published ?published .
        }
      `,
      headers: {
        accept: 'application/ld+json'
      }
    })
    .then(res => res.ok && res.json())
    .then(json => json && setActivitiesByService(json.map(r => ({ serviceUri: r.serviceUri.value, published: r.published.value }))));
  }, [setActivitiesByService]);

  return(
    <>
      <Typography variant="h4" color="primary">Statistiques</Typography>
      <Paper>
        <Box p={2}>
          <Typography variant="h5">Nombre d'abonnés au mailer</Typography>
          <NewSubscribersChart
            width={1200}
            height={550}
            theme={VictoryTheme.material}
            subscriptions={subscriptions}
          />
          <Typography variant="h5">Abonnés par thématiques</Typography>
          <SubscribersByThemeChart
            width={1200}
            height={550}
            theme={VictoryTheme.material}
            subscriptions={subscriptions}
          />
          <Typography variant="h5">Abonnés par départements</Typography>
          <SubscribersByLocationChart
            subscriptions={subscriptions}
          />
          <Typography variant="h5">Nouveautés par thématiques</Typography>
          <ActivitiesByThemeChart
            width={1200}
            height={550}
            theme={VictoryTheme.material}
            activities={activitiesByTheme}
          />
          <Typography variant="h5">Nouveautés par projets</Typography>
          <ActivitiesByServiceChart
            width={1200}
            height={550}
            theme={VictoryTheme.material}
            activities={activitiesByService}
          />
        </Box>
      </Paper>
    </>
  )
};

export default StatisticsPage;
