import React, { useState } from "react";
import "./Expense.css";
import Card from "./Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterCahngeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
    // 저장된 date의 연도가 필터에서 선택한 연도와 같은 경우 treu리턴
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterCahngeHandler}
        />
        <ExpenseChart expense={filteredExpenses}/>
        <ExpenseList items = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;
