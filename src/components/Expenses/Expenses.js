import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const DUMMY_EXPENSES = props.items;

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const FILTER_EXPENSES = DUMMY_EXPENSES.filter((filterExpense) => {
    return filterExpense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={FILTER_EXPENSES}/>
        <ExpensesList items={FILTER_EXPENSES} />
      </Card>
    </li>
  );
};

export default Expense;
