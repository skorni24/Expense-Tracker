import React, { useState } from "react";
import "./expenseform.css";

const Expenseform = (props) => {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredamount, setenteredamount] = useState("");
  const [entereddate, setentereddate] = useState("");
//alternatives for that usestate hooks using it all at atime 
// setuserinput({
//     ...userinput,
//     enteredtitle:event.target.value
// });
// };
// setuserinput((prevstate)=>{
// return { ...prevstate,enteredtitle:event.target.value};
// });
// }


// const amountchange = (e) => {
// setuserinput({
//     ...userinput,
//     enteredamount:e.target.value,
// });
// };
// const datechange = (e) => {
// setuserinput({
//     ...userinput,
//     entereddate:e.target.value,
// });
// };
  const presentDate= new Date();
  const titlechange = (event) => {
    setenteredtitle(event.target.value);
    //alert(event.target.value);
  };
  const amountchange = (e) => {
    setenteredamount(e.target.value);
   // alert(e.target.value);
  };
  const datechange = (e) => {
    setentereddate(e.target.value);
    //alert(e.target.value);
  };

  const submitfunc=(e)=>{
    e.preventDefault();
    const expenseData={
      title:enteredtitle,
      amount: +enteredamount,
      date:new Date(entereddate),
    }

    props.onSaveExpenseData(expenseData);//binding the above expense data with onsaveexpensedata.
    setenteredamount('');
    setentereddate('');
    setenteredtitle('');
    //e.clear();
  };

  return (
    <div>
      <form onSubmit={submitfunc}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" 
            value={enteredtitle}
           onChange={titlechange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredamount}
              onChange={amountchange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-12-24"
              max={presentDate} //this is the way to get the current date
              value={entereddate}
              onChange={datechange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default Expenseform;
