import { useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import ExpsenseFiler from "./Components/ExpenseFilter";
import Categories from "./Common/ExpenseCategory";
import ExpenseFormNew from "./Components/ExpenseFormNew";

function App() {
  const [expenseData, setExpenseData] = useState([
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

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenseData.filter((x) => x.category === selectedCategory)
    : expenseData;

  return (
    <>
      <div className="mb-3">
        <ExpenseFormNew
          onSubmit={(data) =>
            setExpenseData([
              ...expenseData,
              { ...data, id: expenseData.length + 1 },
            ])
          }
        ></ExpenseFormNew>
      </div>
      <div className="mb-3">
        <ExpsenseFiler
          categories={Categories}
          onSelect={(category) => setSelectedCategory(category)}
        ></ExpsenseFiler>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenseData(expenseData.filter((x) => x.id !== id));
        }}
      ></ExpenseList>
    </>
  );
}

export default App;
