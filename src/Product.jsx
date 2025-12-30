import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "./redux/slice";
export default function Product() {
  const dispatch = useDispatch();
  return (
    <section>
      <div className="product-card">
        <div className="product-image">
          <img
            src="https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/271047_0_yaama6.png?tr=w-600"
            alt="Wireless Headphone"
          />
        </div>
        <div className="product-info">
          <h3 className="product-title">Wireless Headphones</h3>
          <p className="product-desc">
            High-quality wireless headphones with deep bass and noise isolation.
          </p>
          <div className="product-footer">
            <span className="product-price">₹2,999</span>
            <button className="add-to-cart" onClick={() => dispatch(addItem())}>
              Add to Cart
            </button>
            <button
              className="remove-cart-btn"
              onClick={() => dispatch(removeItem())}
            >
              Remove from Cart
            </button>
            <button
              className="clear-cart-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
