
import { useState } from 'react';
import './ExpenseForm.css';
 
const ExpenseForm =(props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle :'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });

    // title이 변경될 때마다 실행될 놈
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        // setUserInput((prevState)=> {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
    };

    const amountCahngeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangerHandlrer =(event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expendsDate = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expendsDate);
        setEnteredTitle(''); // 입력값 초기화
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}> 
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type ='text' value ={enteredTitle} onChange={titleChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type ='number' value= {enteredAmount} min='0.01' step='0.01' onChange={amountCahngeHandler}/ >
            </div>
        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type ='date' value ={enteredDate} min='2022-01-01' max='2025-12-31'onChange={dateChangerHandlrer}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm;