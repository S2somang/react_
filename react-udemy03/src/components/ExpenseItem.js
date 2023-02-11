import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
// 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐!
function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>${props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
