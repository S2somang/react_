import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "./Card";

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
}

export default Expense;
