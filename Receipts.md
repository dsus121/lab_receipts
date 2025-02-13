Sample receipts:

const receipts = [ 
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
	} 
] 

Add receipts either as props or state.

Make a Receipt component that renders the receipt including the toppings.

By default the receipts are not paid. Use conditional rendering to only display 
the receipt if it has not been paid.

(STRETCH)

Add a click event on the receipt that changes the value of paid from false to true. 
Once clicked the receipt should immediately disappear from the browser view