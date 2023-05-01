import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
const ExpenseList = props => {
    if(props.items.length === 0 ){
      return <h2 className ="expenses-list__fallback">Found no expenses.</h2>
    }

    return <ul className="expenses-list">
        {props.items.map((expense) => (
        // 위에서 filter로 데이터를 뽑아줘서 가능
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
};

export default ExpenseList;