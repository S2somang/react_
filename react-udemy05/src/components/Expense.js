import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";

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

  let expensesContent = <p>No expenses found.</p>;

  if(filteredExpenses.length >0 ){
    expensesContent =filteredExpenses.map((expense) => (
      // 위에서 filter로 데이터를 뽑아줘서 가능
      <ExpenseItem
        key = {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterCahngeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expense;
