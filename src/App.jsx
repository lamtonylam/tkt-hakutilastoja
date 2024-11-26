import { LineChart } from '@mui/x-charts/LineChart';
import { todistusvalinta_dataset } from './todistusvalinta-data.js';

function App() {
  return (
    <div>
      <div
        style={{
          height: '500px',
          width: '100%',
          maxWidth: '900px',
          margin: 'auto',
        }}
      >
        <h3>TKT-todistusvalinta ensikertalaisille hakijoille</h3>
        <LineChart
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
