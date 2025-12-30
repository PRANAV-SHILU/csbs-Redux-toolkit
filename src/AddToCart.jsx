import { useSelector } from "react-redux";
export default function AddToCart() {
  const value = useSelector((state) => state.cart.value);
  return (
    <div className="cart-wrapper">
      <a href="#" className="cart-link">
        <span className="cart-icon">🛒</span>
        <span className="cart-text">Cart</span>
        {value !== 0 && <span className="cart-count">{value}</span>}
      </a>
    </div>
  );
}
