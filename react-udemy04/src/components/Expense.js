import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";

function Expense(props) {
  const [filterYear, setFilterYear] = useState('2020');
  const filterCahngeHandler = selectedYear => {
    console.log('Expenses.js');
    console.log(selectedYear);
    setFilterYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter = {filterCahngeHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
      </Card>
    </div>
  );
}

export default Expense;
