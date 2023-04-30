import {useState} from 'react';
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

// 더미데이터, 상태를 초기화하는데 사용할 수 있음
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
 const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpense(prevExpense => {
      return [expense, ...prevExpense]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items= {expenses}/>
    </div>
  );
}

export default App;
