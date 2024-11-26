import React from 'react';
import { LineChart } from '@mui/x-charts';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

const TodistusvalintaChart = ({ todistusvalinta_dataset }) => {
  return (
    <LineChart
      colors={mangoFusionPalette}
      grid={{ vertical: true, horizontal: false }}
      margin={{
        top: 140,
        bottom: 80,
      }}
      dataset={todistusvalinta_dataset}
      xAxis={[
        {
          dataKey: 'year',
          valueFormatter: (value) => value.toString(),
          scaleType: 'point',
          label: 'Vuosi',
        },
      ]}
      series={[
        {
          dataKey: 'helsinki',
          label: 'Helsingin yliopisto',
          valueFormatter: (value) => `${value}`,
        },
        {
          dataKey: 'tampere',
          label: 'Tampereen yliopisto',
          valueFormatter: (value) => `${value}`,
        },
        {
          dataKey: 'turku',
          label: 'Turun yliopisto',
          valueFormatter: (value) => `${value}`,
        },
        {
          dataKey: 'oulu',
          label: 'Oulun yliopisto',
          valueFormatter: (value) => `${value}`,
        },
        {
          dataKey: 'jyväskylä',
          label: 'Jyväskylän yliopisto',
          valueFormatter: (value) => `${value}`,
        },
        {
          dataKey: 'joensuu',
          label: 'Joensuu - Itä-Suomen yliopisto',
          valueFormatter: (value) => `${value}`,
        },
        {
          dataKey: 'kuopio',
          label: 'Kuopio - Itä-Suomen yliopisto',
          valueFormatter: (value) => `${value}`,
        },
      ]}
      yAxis={[{ min: 55, max: 95, label: 'Pisteraja' }]}
    />
  );
};

export default TodistusvalintaChart;
