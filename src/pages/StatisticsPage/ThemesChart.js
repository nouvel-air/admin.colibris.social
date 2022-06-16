import React, { useMemo } from 'react';
import {VictoryChart, VictoryLine, createContainer, VictoryTooltip} from 'victory';

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

function removeTime(date = new Date()) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
}

const randomColor = () => Math.floor(Math.random()*16777215).toString(16);

const themes = [
  "Alimentation et agriculture",
  "Communs",
  "Coopération",
  "Culture",
  "Défense du vivant",
  "Démocratie",
  "Ecoféminisme",
  "Economie et décroissance",
  "Education et formation",
  "Energie",
  "Engagement et militantisme",
  "Habitat",
  "Mobilité",
  "Modes de vie",
  "Numérique éthique",
  "Santé",
  "Solidarité",
  "Territoires résilients",
  "Transition intérieure",
  "Travail"
];

const ThemesChart = ({ subscriptions, ...rest }) => {
  const data = useMemo(() => {
    let data = subscriptions.filter(s => s.started);
    const startNum = subscriptions.length - data.length;
    data.sort((a, b) => (new Date(a.started)).getTime() - (new Date(b.started)).getTime());
    data = data.reduce((acc, s) => {
      const started = new Date(s.started).toDateString();
      for( let theme of themes ) {
        if (s.themes.includes(theme)) {
          if (!acc[theme][started]) {
            const lastValue = Object.values(acc[theme]).length > 0 ? Object.values(acc[theme]).pop() : { y: startNum };
            acc[theme][started] = {
              x: removeTime(new Date(s.started)),
              y: lastValue.y + 1
            };
          } else {
            acc[theme][started].y++;
          }
        }
      }
      return acc;
    }, Object.fromEntries(themes.map(theme => ([theme, {}]))));

    return data;
  }, [subscriptions]);

  return(
    <VictoryChart
      scale={{ x: "time" }}
      containerComponent={
        <VictoryZoomVoronoiContainer
          zoomDimension="x"
          labels={({ datum }) => {
            return `${datum.childName}: ${datum.y} abonnés`;
          }}
        />
      }
      {...rest}
    >
      {themes.map(theme => (
        <VictoryLine
          name={theme}
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "#" + randomColor() }
          }}
          data={Object.values(data[theme])}
        />
      ))}
    </VictoryChart>
  )
};

export default ThemesChart;
