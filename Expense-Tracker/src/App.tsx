import { useState } from "react";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [ExpenseData, setExpenseData] = useState([
    {
      id: 1,
      description: "Coffee at Starbucks",
      amount: 5.5,
      category: "Food & Drink",
    },
    {
      id: 2,
      description: "Monthly Netflix Subscription",
      amount: 12.99,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "New shoes",
      amount: 80.0,
      category: "Clothing",
    },
    {
      id: 4,
      description: "Grocery shopping",
      amount: 45.2,
      category: "Food & Drink",
    },
    {
      id: 5,
      description: "Gasoline",
      amount: 25.3,
      category: "Transportation",
    },
    {
      id: 6,
      description: "Dinner at Italian restaurant",
      amount: 40.0,
      category: "Food & Drink",
    },
    {
      id: 7,
      description: "Cinema tickets",
      amount: 20.0,
      category: "Entertainment",
    },
  ]);

  return (
    <>
      <ExpenseList
        expenses={ExpenseData}
        onDelete={(id) => {
          setExpenseData(ExpenseData.filter((x) => x.id !== id));
        }}
      ></ExpenseList>
    </>
  );
}

export default App;
