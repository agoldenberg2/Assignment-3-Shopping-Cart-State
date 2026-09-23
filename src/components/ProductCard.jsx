import "./ProductCard.css";

function ProductCard({ product, name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h2>{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>

        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

// had a lot of trouble getting this to work I used AI to help explain where I went wrong and what I needed to change. I was trying to pass the product object to the onAddToCart function, but I was only passing the name, price, image, and description. I needed to pass the entire product object so that I could access all of its properties in the addToCart function in App.jsx.