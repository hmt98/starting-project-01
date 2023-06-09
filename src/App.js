import React, {useState} from 'react';
import Expense from './components/Expenses/Expenses';
import DUMMY_EXPENSES from './components/Expenses/Item';
import NewExpense from './components/NewExpense/NewExpense';
//import Practice from './components/Practice/Practice';




const App =  () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense)

    setExpenses ((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense
        items={expenses}
      />
      {/* <Practice></Practice> */}
    </div>
  );
}

export default App;
