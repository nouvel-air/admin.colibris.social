import React, { useMemo } from 'react';
import { VictoryChart, VictoryLine, createContainer, VictoryTooltip } from 'victory';

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

function removeTime(date = new Date()) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
}

const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

const services = {
  [`${process.env.REACT_APP_MIDDLEWARE_URL}services/lemouvement`]: "Colibris le Mouvement",
  [`${process.env.REACT_APP_MIDDLEWARE_URL}services/lafabrique`]: "La Fabrique des Colibris",
  [`${process.env.REACT_APP_MIDDLEWARE_URL}services/groupeslocaux`]: "Colibris Groupes Locaux",
  [`${process.env.REACT_APP_MIDDLEWARE_URL}services/universite`]: "L'Université des Colibris",
  [`${process.env.REACT_APP_MIDDLEWARE_URL}services/presdecheznous`]: "Près de chez nous",
  [`${process.env.REACT_APP_MIDDLEWARE_URL}services/laboutique`]: "La Boutique des Colibris",
  [`${process.env.REACT_APP_MIDDLEWARE_URL}services/lemag`]: "Colibris Le Mag"
};

const ActivitiesByServiceChart = ({ activities, ...rest }) => {
  const data = useMemo(() => {
    let data = activities;
    data.sort((a, b) => (new Date(a.published)).getTime() - (new Date(b.published)).getTime());
    data = data.reduce((acc, s) => {
      const published = new Date(s.published).toDateString();

      if( !acc[published] ) {
        if( Object.values(acc).length === 0 ) {
          // If first day, create a new object with y = 0 for all themes
          acc[published] = Object.fromEntries(Object.values(services).map(service => ([service, { x: removeTime(new Date(s.published)), y: 0 }])));
        } else {
          // If another day, copy the y values of the previous day
          const previousDay = Object.values(acc).pop();
          acc[published] = Object.fromEntries(Object.entries(previousDay).map(([service, values]) => ([service, { x: removeTime(new Date(s.published)), y: values.y }])));
        }
      }

      acc[published][services[s.serviceUri]].y++;

      return acc;
    }, {});

    return data;
  }, [activities]);

  return(
    <VictoryChart
      scale={{ x: "time" }}
      containerComponent={
        <VictoryZoomVoronoiContainer
          zoomDimension="x"
          labels={({ datum }) => {
            return `${datum.childName}: ${datum.y} actualités`;
          }}
        />
      }
      {...rest}
    >
      {Object.values(services).map(service => (
        <VictoryLine
          name={service}
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "#" + randomColor() }
          }}
          data={Object.values(data).map(o => o[service])}
        />
      ))}
    </VictoryChart>
  )
};

export default ActivitiesByServiceChart;
