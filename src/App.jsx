import { LineChart } from '@mui/x-charts/LineChart';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

import { todistusvalinta_dataset } from '././data/todistusvalinta-data.js';
import './App.css';

import TodistusvalintaChart from './components/todistusvalinta.jsx';

function App() {
  return (
    <div>
      <div className='chart'>
        <h3>TKT-todistusvalinta ensikertalaisille hakijoille</h3>
        <TodistusvalintaChart
          todistusvalinta_dataset={todistusvalinta_dataset}
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
