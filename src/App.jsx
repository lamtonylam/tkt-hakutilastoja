import { LineChart } from "@mui/x-charts/LineChart";

function App() {
    return (
        <div>
            <h3>TKT-todistusvalinta ensikertalaisille hakijoille</h3>
            <LineChart
                xAxis={[
                    {
                        data: [2020, 2021, 2022, 2023, 2024],
                        valueFormatter: (value) => value.toString(),
                        scaleType: "point",
                        label: "Vuosi",
                    },
                ]}
                yAxis={[
                    {
                        id: "helsinki",
                        label: "Pisteraja",
                        min: 70,
                        max: 90,
                    },
                    {
                        id: "tampere",
                        label: "Pisteraja",
                        min: 70,
                        max: 90,
                    },
                    {
                        id: "turku",
                        label: "Pisteraja",
                        min: 70,
                        max: 90,
                    },
                ]}
                series={[
                    {
                        yAxisId: "helsinki",
                        label: "Helsingin yliopisto",
                        data: [87.7, 84.3, 84.6, 82.5, 75.8],
                    },
                    {
                        yAxisId: "tampere",
                        label: "Tampereen yliopisto",
                        data: [76.8, 72.3, 73, 81.1, 82.3],
                    },
                    {
                        yAxisId: "turku",
                        label: "Turun yliopisto",
                        data: [73.3, 77.8, 70.9, 78.5, 85.4],
                    },
                ]}
                width={600}
                height={300}
            />
            <br></br>
            <a href="https://www.cs.helsinki.fi/u/tonylam/">Tony Lam</a>
        </div>
    );
}

export default App;
