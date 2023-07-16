import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues =props.dataPoints.map(dataPoiont => dataPoiont.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className ="chart">
        {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} 
        maxValue ={totalMaximum} 
        label={dataPoint.l} key={dataPoint.label}/>)}
    </div>
};

export default Chart;