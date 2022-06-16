import React, { useState, useEffect } from 'react';
import { VictoryTheme } from 'victory';
import { Typography, Paper, Box } from '@material-ui/core';
import NewSubscribersChart from "./NewSubscribersChart";
import ThemesChart from "./ThemesChart";
import GeoChart from "./GeoChart";

const StatisticsPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_MIDDLEWARE_URL + 'statistics/subscriptions')
      .then(res => res.ok && res.json())
      .then(json => json && setSubscriptions(json));
  }, [setSubscriptions])

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
          <ThemesChart
            width={1200}
            height={550}
            theme={VictoryTheme.material}
            subscriptions={subscriptions}
          />
          <Typography variant="h5">Abonnés par départements</Typography>
          <GeoChart
            subscriptions={subscriptions}
          />
        </Box>
      </Paper>

    </>
  )
};

export default StatisticsPage;
