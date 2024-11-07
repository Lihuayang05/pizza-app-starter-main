// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Header Component
function Header({ isOpen }) {
  return (
    <header className="header">
      <h1>Huayang's Pizza Co.</h1>
      {isOpen && <p className="tagline">Authentic Italian Cuisine</p>}
    </header>
  );
}

// Pizza Component
function Pizza({ name, ingredients, price, image }) {
  return (
    <div className="pizza">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>${price}</p>
    </div>
  );
}

// Order Component
function Order() {
  return (
    <div className="order">
      <p>We're currently open</p>
      <button className="btn">Order</button>
    </div>
  );
}

// Footer Component
function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>Sorry, we're closed</p>}
    </footer>
  );
}

// Menu Component with Pizza Array
function Menu() {
  const pizzas = [
    {
      name: "Spinach Pizza",
      ingredients: "A creamy dream! Our Spinach Pizza layers rich ricotta cheese with tender spinach, all atop a classic tomato and mozzarella base.",
      price: 10,
      image: "pizzas/spinaci.jpg",
    },
    {
      name: "Focaccia Pizza",
      ingredients: "Simplicity at its finest. Our Focaccia Pizza is a crispy, airy delight, infused with the fragrant flavors of Italian olive oil and rosemary.",
      price: 12,
      image: "pizzas/focaccia.jpg",
    },
    {
      name: "Funghi Pizza",
      ingredients: "A savory symphony! Our Funghi Pizza brings together earthy mushrooms and sweet onions, all harmonizing on a bed of rich tomato sauce and melted mozzarella.",
      price: 12,
      image: "pizzas/funghi.jpg",
    },
    {
      name: "Margherita Pizza",
      ingredients: "The classic, perfected. Our Margherita Pizza is a timeless masterpiece, featuring the perfect balance of tangy tomato sauce and creamy mozzarella cheese.",
      price: 12,
      image: "pizzas/margherita.jpg",
    },
    {
      name: "Prosciutto Pizza",
      ingredients: "Elevate your taste buds. Our Prosciutto Pizza combines the salty sweetness of prosciutto with the peppery bite of arugula and the creamy richness of burrata cheese, all on a classic tomato and mozzarella base.",
      price: 12,
      image: "pizzas/prosciutto.jpg",
    },
    {
      name: "Salamino Pizza",
      ingredients: "A spicy sensation! Our Salamino Pizza is a fiery delight, featuring crispy pepperoni slices atop a bed of rich tomato sauce and melted mozzarella.",
      price: 12,
      image: "pizzas/salamino.jpg",
    },
  ];

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzas.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            image={pizza.image}
          />
        ))}
      </div>
    </main>
  );
}

// App Component
function App() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour <= 22;

  return (
    <div className="app">
      <Header isOpen={isOpen} />
      <Menu />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
