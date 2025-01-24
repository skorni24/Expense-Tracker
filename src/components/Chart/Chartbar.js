import React from "react";
import "./chartbar.css";

const ChartBar = (props) => {


let barfilledheight='0%';


if(props.maxValue>0){
    barfilledheight=Math.round((props.value/props.maxValue)*100) +  '%'; // adds that rem value to the height
}

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:barfilledheight}}></div>
        </div>
        <div className="chart-bar__label">{props.label} </div>
      </div>
  );
};

export default ChartBar;
