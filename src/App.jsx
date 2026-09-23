import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/Cartitem";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image: "https://placehold.co/600x400/667eea/ffffff?text=Headphones",
      description: "Comfortable wireless headphones with great sound.",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 59.99,
      image: "https://placehold.co/600x400/764ba2/ffffff?text=Keyboard",
      description: "A stylish mechanical keyboard for work and gaming.",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 99.99,
      image: "https://placehold.co/600x400/4facfe/ffffff?text=Smart+Watch",
      description: "Track your activity and stay connected on the go.",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Added to cart:", product);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => {
    return sum + item.price;  
  }, 0);

  return (
    <>
      <Header
  storeName="ComponentCorner"
  cartCount={cart.length}
/>

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Find the latest tech products at great prices."
        callToAction="Shop Now"
      />

      <main className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={addToCart}
          />
        ))}
      </main>
<section className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))
        )}

        <h3>Total: ${total.toFixed(2)}</h3>
      </section>
      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="555-123-4567"
      />
    </>
  );
}

export default App;