import React from "react";
import "./ExpensesList.css";
import Item from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Item
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
