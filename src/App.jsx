import React, { useState } from "react";
import "./index.css"; // Import the CSS file

// Receipt Component
const Receipt = ({ receipt, onPaid }) => {
  const renderOrderDetails = () => {
    return Object.keys(receipt.order).map(
      (key, index) =>
        key !== "cost" && (
          <p key={index}>
            <span style={{ color: "Indigo", fontWeight: "bold" }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </span>{" "}
            {Array.isArray(receipt.order[key])
              ? receipt.order[key].join(", ")
              : receipt.order[key]}
          </p>
        )
    );
  };

  return (
    <div className="receipt">
      <h3>{receipt.person}</h3>
      {renderOrderDetails()}
      <p>
        <span style={{ color: "purple", fontWeight: "bold" }}>Cost:</span> $
        {receipt.order.cost}
      </p>
      <button onClick={() => onPaid(receipt.person)}>Mark as Paid</button>
    </div>
  );
};

// App Component
const App = () => {
  const [receipts, setReceipts] = useState([
    { 
      person: 'Karolin', 
      order: { 
        main: 'Burrito', 
        protein: 'Organic Tofu', 
        rice: 'Purple Rice', 
        sauce: 'Green Crack', 
        toppings: [ 'Baby Bok Choy', 'Cucumber Kimchi' ], 
        drink: 'Korchata', 
        cost: 22 
      }, 
      paid: false 
    }, 
    { 
      person: 'Mark', 
      order: { 
        main: 'Rice Bowl', 
        protein: 'Ginger Soy Chix', 
        rice: 'Sticky Rice', 
        sauce: 'Korilla', 
        toppings: [ 'Yuzu Pickled Sweet Pepper', 'Kale' ], 
        drink: 'Korchata', 
        cost: 19 
      }, 
      paid: false 
    }, 
    { 
      person: 'Matt', 
      order: { 
        main: 'Salad Bowl', 
        protein: 'Organic Tofu', 
        rice: 'none', 
        sauce: "K'lla", 
        toppings: [ 'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi' ], 
        drink: 'Sparkling Blood Orange Soda', 
        cost: 20 
      }, 
      paid: true 
    }, 
    {
      person: 'Jane',
      order: {
        main: 'Taco',
        protein: 'Beef',
        rice: 'Brown Rice',
        sauce: 'Salsa Verde',
        toppings: ['Cheese', 'Lettuce', 'Tomatoes'],
        drink: 'Lemonade',
        cost: 18
      },
      paid: false
    },
    {
      person: 'Lucy',
      order: {
        main: 'Bowl',
        protein: 'Chicken',
        rice: 'Jasmine Rice',
        sauce: 'Teriyaki',
        toppings: ['Broccoli', 'Carrots', 'Edamame'],
        drink: 'Green Tea',
        cost: 21
      },
      paid: false
    },
    {
      person: 'John',
      order: {
        main: 'Wrap',
        protein: 'Falafel',
        rice: 'none',
        sauce: 'Hummus',
        toppings: ['Olives', 'Cucumber', 'Feta Cheese'],
        drink: 'Mint Tea',
        cost: 17
      },
      paid: true
    },
    {
      person: 'Sarah',
      order: {
        main: 'Sandwich',
        protein: 'Turkey',
        rice: 'none',
        sauce: 'Mustard',
        toppings: ['Lettuce', 'Tomato', 'Pickles'],
        drink: 'Iced Coffee',
        cost: 15
      },
      paid: false
    }
  ]);

  const [showAll, setShowAll] = useState(false);

  const handlePaid = (person) => {
    setReceipts(
      receipts.map((receipt) =>
        receipt.person === person ? { ...receipt, paid: true } : receipt
      )
    );
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="container">
      <button onClick={toggleShowAll}>
        {showAll ? "Hide Paid Receipts" : "Show All Receipts"}
      </button>
      {receipts.map(
        (receipt, index) =>
          (showAll || !receipt.paid) && (
            <Receipt key={index} receipt={receipt} onPaid={handlePaid} />
          )
      )}
    </div>
  );
};

export default App;
