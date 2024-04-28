import React, { useState } from "react";
import "./App.css";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";

function App() {
  const [transactions, setTransactions] = useState([
    { date: "03-01-2024", description: "Rent", category: "House Hold", amount: "$100" },
    { date: "05-08-2024", description: "Food", category: "House Hold", amount: "$97" },
    { date: "07-21-2024", description: "Swimming", category: "Recreational", amount: "$200" },
    { date: "08-16-2024", description: "Groceries", category: "House Hold", amount: "$100" },
    { date: "09-01-2024", description: "Fuel", category: "Transport", amount: "$150" }
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>The Royal Bank Of Flatiron</h1>
      <input
      id="search"
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
