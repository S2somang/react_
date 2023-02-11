import './ExpenseItem.css';
// 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐!
function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <div>${props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>${props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
