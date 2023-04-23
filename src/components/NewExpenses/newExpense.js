import React,{useState} from "react";
import "./NewExpense.css";
import Expenseform from "./Expensefrom";

const NewExpense = (props) => {

  const[isdisplay,setedited]=useState(false);


  const SaveExpenseData=(ip)=>{
    const expenseData={
      ...ip,
      id: Math.random().toString()
    };
    //console.log(expenseData);
    props.onaddExpenseHandler(expenseData);//now in this onaddexpensehandler the data which is binded from both onsaveexpensedata and savexpensedata it is been binded to the onaddexpensehandler which is present in app.js and here we are passing the data as arguments}
  };

const setediting=()=>{
  setedited(true);
}

const stopediting=()=>{
setedited(false);
};

  return (
    <div className="new-expense">
      {!isdisplay && <button onClick={setediting}>Add New Expense</button>}
      {isdisplay && <Expenseform onSaveExpenseData={SaveExpenseData} onCancel={stopediting}/>}{/*here in this onSaveExpenseData is collecting the data present in the expenseform.js data(which has also been called there in expenseform .js) is been binded with saveexpensedata. */}
    </div>
  );
};

export default NewExpense;
