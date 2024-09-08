import React, { useState } from "react";

import ExpenseDate from "./dateinfo";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function Item(props) {
  //props access all the data that is already kept input to the app.js
  // const expensedate = new Date(2021,2,28);
  // const expensetitle='car insurance';
  // const expenseamount=3000;
  //hooks start with use and should called inside a component function

  const [title, setTitle] = useState(props.title);

  //let title=props.title;
  const [isdelete, setisdeleted] = useState(false);

  const func = () => {
    //alert('HELLLO! you enetered correctly!!!');
    props.onDelete(props.id);
  };

  if (isdelete) {
    return null;
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div onCopy={func} className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>

      <button className="expense-item__button" onClick={func}>
        Delete
      </button>
    </Card>
  );
}
