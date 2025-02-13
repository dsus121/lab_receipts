const Receipt = ({ receipt }) => {
    return (
      <div className="receipt">
        <h3>{receipt.person}</h3>
        <p>Main: {receipt.order.main}</p>
        <p>Protein: {receipt.order.protein}</p>
        <p>Rice: {receipt.order.rice}</p>
        <p>Sauce: {receipt.order.sauce}</p>
        <p>Toppings: {receipt.order.toppings.join(', ')}</p>
        <p>Drink: {receipt.order.drink}</p>
        <p>Cost: ${receipt.order.cost}</p>
      </div>
    );
  };
  