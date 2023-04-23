import "./chart.css";
import React from "react";
import ChartBar from "./Chartbar";

const Chart = (props) => {

const datapointvalues=props.dataPoints.map(datapoint=>datapoint.value);
    const totalmax=Math.max(...datapointvalues);
  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar 
        key={dp.label}
        value={dp.value} 
        maxValue={totalmax}
        label={dp.label} />
      ))}
    </div>
  );
};

export default Chart;
