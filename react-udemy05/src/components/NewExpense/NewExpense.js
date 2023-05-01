import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHadler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* 함수 자체가 그냥 전달될 거임 */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHadler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
