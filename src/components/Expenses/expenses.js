import React, { useState } from "react";
//import Item from "./ExpenseItem";
import "./expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpenses/ExpenseFilter";
import ExpenseList from "./ExpenesesList";
import ExpenseChart from "./ExpensesChart";
//import ExpensesFilter from "../NewExpenses/ExpenseFilter";

function Expense(props) {
  const [filteryear, setfilteredyear] = useState("");
  const filterchange = (SelectedYear) => {
    setfilteredyear(SelectedYear);
  };

  const filteredexpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteryear;
  });
  return (
    <Card className="expenses">
  
      <ExpensesFilter 
      selected={filteryear}
      onchangefilter={filterchange} 
      />
      <ExpenseChart expenses={filteredexpenses}/>
    <ExpenseList items={filteredexpenses}/>
    </Card>
  );
}

export default Expense;
