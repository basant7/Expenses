// import "./ExpenseItem.css";
// import ExpenseDate from "./ExpenseDate";
// import Card from '../UI/Card';
// import { useState } from "react";

// function ExpenseItem(props) {

//   const [title, setTitle] = useState(props.title);
//   const clickHandler = () =>{
//     setTitle('Television')
//     console.log(title);
//   }
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date}/>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// }

// export default ExpenseItem;

import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //   const [title, setTitle] = useState(props.title);
  //   const clickHandler = () =>{
  //     setTitle('Television')
  //     console.log(title);
  //   }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
