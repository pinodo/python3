import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Initialize data in case of no previous data exists.
const INITIAL_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);

    // conventional JS code; append first element, copy the rest.
    setExpenses([expense, ...expenses]);

    // A clean code style
    // setExpenses((prevExpenses) => {
    //   return [expense, ...prevExpenses];
    // });
  };

  // Original (not using jsx)
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let' get started!)"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // Using jsx
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
