import React from "react";
import Card from "./_local_component/Card";
import ExpenseTable from "./_local_component/ExpenseTable";
type CardProp = {
  name: string;
  price: number;
  type: string;
};
function Expenses() {
  const cards: CardProp[] = [
    {
      name: "TOTAL EXPENSE",
      price: 250000,
      type: "Last updated: 02 Jan 2025",
    },
    {
      name: "HIGHEST CATEGORY",
      price: 100000,
      type: "Salary",
    },
    {
      name: "MOST RECENT EXPENSE",
      price: 10000,
      type: "Cleaning supplies",
    },
  ];
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {cards.map((item, index) => (
          <div key={index} className="h-fit w-full">
            <Card name={item.name} price={item.price} type={item.type} />
          </div>
        ))}
      </div>
      <ExpenseTable />
    </div>
  );
}

export default Expenses;
