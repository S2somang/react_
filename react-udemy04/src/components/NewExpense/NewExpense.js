import './NewExpense.css';
import ExpenseForm  from './ExpenseForm';
const NewExpense = (props) => {
    const saveExpenseDataHadler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);    
};


    return <div className='new-expense'>
        {/* 함수 자체가 그냥 전달될 거임 */}
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHadler}/>
    </div>
}

export default NewExpense;