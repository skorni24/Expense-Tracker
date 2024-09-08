import React, { useState } from "react";
import Expense from "./components/Expenses/expenses.js";
import NewExpense from "./components/NewExpenses/newExpense.js";

const INTIALEXPENSES = [
  {
    id: "e1",
    title: "sample",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
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

const App = () => {
  const [expenses, setExpenses] = useState(INTIALEXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== expenseId);
    });
  };

  return (
    <div className="App">
      <div>
        <NewExpense onaddExpenseHandler={addExpenseHandler} />
        {/*now this expense handler collects information from onaddexpensehandler(already used in newexpense.js) and displays*/}
      </div>
      <Expense items={expenses} onDelete={deleteExpenseHandler} />
    </div>
  );
};

export default App;
