import './cart.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Cart({ cartItems: propCartItems = [] }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Get cart items passed via navigation
  const stateCartItems = location.state?.cartItems || [];

  // Combine props and state, but remove duplicates by `id`
  const combinedItems = [...propCartItems, ...stateCartItems];
  const deduplicatedMap = new Map();

  combinedItems.forEach(item => {
    const id = item.id;
    if (!deduplicatedMap.has(id)) {
      deduplicatedMap.set(id, { ...item, quantity: item.quantity || 1 });
    }
  });

  const mergedItems = Array.from(deduplicatedMap.values());

  const [cartItems, setCartItems] = useState(mergedItems);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  const handleRemove = (indexToRemove) => {
    setCartItems(prevItems =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleQuantityChange = (index, delta) => {
    setCartItems(prevItems =>
      prevItems.map((item, i) => {
        if (i === index) {
          const newQuantity = item.quantity + delta;
          return {
            ...item,
            quantity: newQuantity > 1 ? newQuantity : 1,
          };
        }
        return item;
      })
    );
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const numericPrice = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
        return total + numericPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-page-container">
      <h3 className="cart-page-title">Your Cart</h3>

      {cartItems.length === 0 ? (
        <p className="cart-empty-msg">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={item.id} className="cart-page-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-page-item-details">
                  <p><strong>{item.title}</strong></p>
                  <p>{item.type}</p>
                  <p>Dimensions: {item.dimensions}</p>
                  <p>Price: {item.price}</p>

                  {/* Quantity Controls */}
                  <div className="cart-quantity-control">
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>

                  <p>
                    Subtotal: ₹
                    {(parseFloat(item.price.replace(/[₹,]/g, '')) * item.quantity).toFixed(2)}
                  </p>

                  <button className="cart-remove-btn" onClick={() => handleRemove(index)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total-section">
            <h4>Total: ₹{calculateTotal()}</h4>
          </div>

          <button className="cart-checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
