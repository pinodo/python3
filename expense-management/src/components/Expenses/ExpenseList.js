import React from "react";

import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
// import ExpenseDate from "./ExpenseDate";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* first method */}
      {/* must use the brackets when using a function */}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>

    // second method
    // <li>
    //   <Card className='expense-item'>
    //     <ExpenseDate date={props.date} />
    //     <div>
    //       <h2>{props.title}</h2>
    //       <div className='expense-item__price'>${props.amount}</div>
    //     </div>
    //   </Card>
    // </li>
  );
  // from Expenses.js
  //   let expenseContent = <p>No expenses found.</p>;
  //   if (filteredExpenses.length > 0) {
  //     expenseContent = filteredExpenses.map((expense) => (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     ));
  //   }
};

export default ExpenseList;
