import React, { useMemo } from 'react';
import createSlug from 'speakingurl';
import { VictoryChart, VictoryLine, createContainer, VictoryTooltip } from 'victory';

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

function removeTime(date = new Date()) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
}

const slugify = label => createSlug(label.trim(), { lang: 'fr', custom: { '.': '.', 'Ǧ': 'g' } });

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

const botsToThemes = Object.fromEntries(themes.map(theme => ([`${process.env.REACT_APP_MIDDLEWARE_URL}bots/${slugify(theme)}`, theme])));

const ActivitiesByThemeChart = ({ activities, ...rest }) => {
  const data = useMemo(() => {
    let data = activities;
    data.sort((a, b) => (new Date(a.published)).getTime() - (new Date(b.published)).getTime());
    data = data.reduce((acc, s) => {
      const published = new Date(s.published).toDateString();

      if( !acc[published] ) {
        if( Object.values(acc).length === 0 ) {
          // If first day, create a new object with y = 0 for all themes
          acc[published] = Object.fromEntries(themes.map(theme => ([theme, { x: removeTime(new Date(s.published)), y: 0 }])));
        } else {
          // If another day, copy the y values of the previous day
          const previousDay = Object.values(acc).pop();
          acc[published] = Object.fromEntries(Object.entries(previousDay).map(([theme, values]) => ([theme, { x: removeTime(new Date(s.published)), y: values.y }])));
        }
      }

      acc[published][botsToThemes[s.botUri]].y++;

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
      {themes.map(theme => (
        <VictoryLine
          name={theme}
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "#" + randomColor() }
          }}
          data={Object.values(data).map(o => o[theme])}
        />
      ))}
    </VictoryChart>
  )
};

export default ActivitiesByThemeChart;
