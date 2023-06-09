import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';


const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expensesData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expensesData);
    }

    const [formDisplay, setFormDisplay] = useState(false);

    const displayFormHandler = () => {
        setFormDisplay(true);
    }

    const hideFormHandler = () => {
        setFormDisplay(false);
    }

    let displayForm = formDisplay === true ? <ExpenseForm onHideForm={hideFormHandler} onSaveExpenseData={saveExpenseDataHandler} /> :  <button onClick={displayFormHandler}>Add New Expense</button>

    return (
        <div className='new-expense'>
            {displayForm}
        </div>
    );
};

export default NewExpense;