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

const NewSubscribersChart = ({ subscriptions, ...rest }) => {
  const data = useMemo(() => {
    let data = subscriptions.filter(s => s.started);
    const startNum = subscriptions.length - data.length;
    data.sort((a, b) => (new Date(a.started)).getTime() - (new Date(b.started)).getTime());
    data = data.reduce((acc, s) => {
      const started = new Date(s.started).toDateString();
      if(!acc[started]) {
        const lastValue = Object.values(acc).length > 0 ? Object.values(acc).pop() : { y: startNum };
        acc[started] = {
          x: removeTime(new Date(s.started)),
          y: lastValue.y + 1
        };
      } else {
        acc[started].y++;
      }
      return acc;
    }, {});

    return Object.values(data);
  }, [subscriptions]);

  return(
    <VictoryChart
      scale={{ x: "time" }}
      containerComponent={
        <VictoryZoomVoronoiContainer
          zoomDimension="x"
          labels={({ datum }) => {
            return `${datum.x.toLocaleDateString()}: ${datum.y} abonnés`;
          }}
        />
      }
      {...rest}
    >
      <VictoryLine
        labelComponent={<VictoryTooltip />}
        style={{
          data: { stroke: "#bdc900" }
        }}
        data={data}
        // animate={{
        //   duration: 4000,
        //   onLoad: { duration: 2000 }
        // }}
      />
    </VictoryChart>
  )
};

export default NewSubscribersChart;
