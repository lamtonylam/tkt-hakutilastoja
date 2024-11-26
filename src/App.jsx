import { LineChart } from '@mui/x-charts/LineChart';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

import { todistusvalinta_dataset } from '././data/todistusvalinta-data.json';
import { ensikekoevalinta_ensikertalainen_dataset } from '././data/koevalinta-ensikertalaiset-data.json';
import './App.css';

import TodistusvalintaChart from './components/todistusvalinta.jsx';
import Koevalinta_ensikertalaiset_chart from './components/koevalinta-ensikertalaiset.jsx';

function App() {
  return (
    <>
      <div className='chart'>
        <h3>TKT-todistusvalinta ensikertalaisille hakijoille</h3>
        <TodistusvalintaChart
          todistusvalinta_dataset={todistusvalinta_dataset}
        />
      </div>
      <div className='chart'>
        <h3>TKT-koevalinta ensikertalaisille hakijoille</h3>
        <Koevalinta_ensikertalaiset_chart
          ensikekoevalinta_ensikertalainen_dataset={
            ensikekoevalinta_ensikertalainen_dataset
          }
        />
      </div>
      <div className='footer'>
        <a href='https://www.cs.helsinki.fi/u/tonylam/'>
          <h3>Tony Lam</h3>
        </a>
        <br />
        Lähde:
        <a href='https://vipunen.fi/fi-fi/yliopisto/Sivut/Hakeneet-ja-hyv%C3%A4ksytyt.aspx'>
          Vipunen - OPH
        </a>
      </div>
    </>
  );
}

export default App;
