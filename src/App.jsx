import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header storeName="ComponentCorner" />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Find the latest tech products at great prices."
        callToAction="Shop Now"
      />

      <main className="products">
        <ProductCard
          name="Wireless Headphones"
          price="79.99"
          image="https://placehold.co/600x400/667eea/ffffff?text=Headphones"
          description="Comfortable wireless headphones with great sound."
        />

        <ProductCard
          name="Mechanical Keyboard"
          price="59.99"
          image="https://placehold.co/600x400/764ba2/ffffff?text=Keyboard"
          description="A stylish mechanical keyboard for work and gaming."
        />

        <ProductCard
          name="Smart Watch"
          price="99.99"
          image="https://placehold.co/600x400/4facfe/ffffff?text=Smart+Watch"
          description="Track your activity and stay connected on the go."
        />
      </main>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="555-123-4567"
      />
    </>
  );
}

export default App;