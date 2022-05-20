import React /*, { useState }*/ from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // React ignores the variable changes. So we have to use useState
  // const [VARIABLE(current state value), FUNCTION(updates the value)] = useState(props.sth);
  // const [title, setTitle] = useState(props.title);
  // const [date, setDate] = useState(props.date);
  // console.log("ExpenseItem evaluated by React");

  // const changeTitle = () => {
  //   setTitle("Updated!");
  // setDate(new Date(2022, 5, 5));
  //   console.log(title);
  // };

  // console.log(props.id);
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
        {/* <button onClick={changeTitle}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
