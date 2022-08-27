import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./../FilterExpenses/ExpensesFilter";
import Card from "./../UI/Card";

export default function Expenses(props) {
  const [year, setYear] = useState("");

  const yearSelectHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onYearSelect={yearSelectHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

// <ExpenseItem
//   title={props.expenses[0].title}
//   date={props.expenses[0].date}
//   amount={props.expenses[0].amount}
// />
// <ExpenseItem
//   title={props.expenses[1].title}
//   date={props.expenses[1].date}
//   amount={props.expenses[1].amount}
// />
// <ExpenseItem
//   title={props.expenses[2].title}
//   date={props.expenses[2].date}
//   amount={props.expenses[2].amount}
// />
// <ExpenseItem
//   title={props.expenses[3].title}
//   date={props.expenses[3].date}
//   amount={props.expenses[3].amount}
// />
