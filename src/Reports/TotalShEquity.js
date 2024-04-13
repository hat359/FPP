import Chart from "../Utils/Chart";
import axios from "axios";
import {  useEffect,  useState } from "react";

export default function TotalShEquity() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=IBM&apikey=demo"
        );
        const quarterlyReports = response.data.quarterlyReports;
        const ChartData = [];

        for (let i = 0; i < quarterlyReports.length; i += 4) {
          const yr = quarterlyReports[i].fiscalDateEnding.split("-")[0];
          let j = i;
          let temp = { year: parseInt(yr) };
          let ct = 0;

          while (ct < 4 && j < quarterlyReports.length) {
            let st = "Q" + (4 - (j % 4));
            let inc = quarterlyReports[j].totalShareholderEquity;

            temp[st] = inc;
            j++;
            ct++;
          }

          ChartData.push(temp);
        }
        let rev = ChartData.reverse();
        setData(rev);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Chart
        data={data}
        title="Total Shareholder Equity"
        label="Total Shareholder Equity in Billions"
      />
    </div>
  );
}
