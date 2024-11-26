import { LineChart } from '@mui/x-charts/LineChart';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

import { todistusvalinta_dataset } from './todistusvalinta-data.js';
import './App.css';

function App() {
  return (
    <div>
      <div className='chart'>
        <h3>TKT-todistusvalinta ensikertalaisille hakijoille</h3>
        <LineChart
          colors={mangoFusionPalette}
          margin={{
            left: 80,
            right: 80,
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
      </div>
      <br />
      <a href='https://www.cs.helsinki.fi/u/tonylam/'>Tony Lam</a>
      <br />
      Lähde:{' '}
      <a href='https://vipunen.fi/fi-fi/yliopisto/Sivut/Hakeneet-ja-hyv%C3%A4ksytyt.aspx'>
        Vipunen - OPH
      </a>
    </div>
  );
}

export default App;
