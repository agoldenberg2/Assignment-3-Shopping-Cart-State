import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>

      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <span className="cart-count">🛒</span>
      </nav>
    </header>
  );
}

export default Header;