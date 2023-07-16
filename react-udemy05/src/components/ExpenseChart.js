import React from "react";
import Chart from './Chart/Chart';

const ExpenseChart = (props) => {
    const ChartDataPoints = [
        {label:'Jan', value: 0 },
        {label:'Feb', value: 0 },
        {label:'Mar', value: 0 },
        {label:'Apr', value: 0 },
        {label:'May', value: 0 },
        {label:'Jun', value: 0 },
        {label:'Jul', value: 0 },
        {label:'Aug', value: 0 },
        {label:'Sep', value: 0 },
        {label:'Oct', value: 0 },
        {label:'Nov', value: 0 },
        {label:'Dec', value: 0 },
    ];
    // 모든 비용을 검토해 각 달의 모든 비용 합산 
    // in이아닌 of를 사용하는 이유 : props.expenses가 객체가 아닌 배열이기 때문
    for (const expense of props.expense){
        const expenseMonth = expense.date.getMonth(); // startgin at 0 => January => 0
        ChartDataPoints[expenseMonth].value += expense.amount; //특정 달의 값 증가

    }

    return <Chart dataPoints={ChartDataPoints}/>
}

export default ExpenseChart;