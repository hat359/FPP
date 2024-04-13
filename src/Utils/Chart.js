import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import { CustomTooltip } from "./Custom";
const CustomBarChart = ({ data, title, label }) => {
  const formatter = (value) => `${value / 1000000000} B`;
  return (
    <div>
      <div align="center">
        <br /> <br />
        <h2>{title}</h2>
      </div>
      <br />
      <br />
      <br />
      <div align="center">
        <BarChart
          width={1200}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 40,
            bottom: 65,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="year">
            <Label
              value="Year"
              position="insideBottom"
              offset={-50}
              style={{ fontSize: "30px" }}
            />
          </XAxis>
          <YAxis tickFormatter={formatter}>
            <Label
              value={label}
              angle={-90}
              dx={-50}
              style={{ fontSize: "30px" }}
            />
          </YAxis>

          <Tooltip content={<CustomTooltip />} payload={[]} label={""} />
          <Legend verticalAlign="top" align="center" />
          <Bar dataKey="Q1" fill="#8884d8" />
          <Bar dataKey="Q2" fill="#82ca9d" />
          <Bar dataKey="Q3" fill="#ffc658" />
          <Bar dataKey="Q4" fill="#ff7300" />
        </BarChart>
      </div>
    </div>
  );
};

export default CustomBarChart;
