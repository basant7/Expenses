import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  // const [enterValue, setenterValue] = useState({
  //   enteredTitle:'',
  //   enteredDate:'',
  //   enteredAmount:''
  // })

  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    // setenterValue({
    //   ...enterValue,
    //   enteredTitle:event.target.value
    // })
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    // setenterValue({
    //   ...enterValue,
    //   enteredDate:event.target.value
    // })
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    // setenterValue({
    //   ...enterValue,
    //   enteredAmount:event.target.value
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2010-01-01"
            max="2022-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
