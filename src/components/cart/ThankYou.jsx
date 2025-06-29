// src/components/thankyou/ThankYou.jsx
import { useNavigate, useLocation } from 'react-router-dom';
import './thankyou.css';
import { useEffect, useState } from 'react';

function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const { billingInfo, cartItems } = location.state || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  const calculateTotal = () => {
    return cartItems?.reduce((total, item) => {
      const numericPrice = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
      return total + numericPrice * (item.quantity || 1);
    }, 0).toFixed(2);
  };

  if (loading) {
    return (
      <div className="thankyou-loading">
        <div className="spinner"></div>
        <p>Processing your order...</p>
      </div>
    );
  }

  return (
    <div className="thankyou-container">
      <h2>🎉 Thank You for Your Order!</h2>
      <p>Your order has been placed successfully.</p>

      {billingInfo && (
        <div className="thankyou-section">
          <div className="bill-inf">
            <h3>🧾 Billing Information</h3>
          </div>
          <p><strong>Name:</strong> {billingInfo.fullName}</p>
          <p><strong>Email:</strong> {billingInfo.email}</p>
          <p><strong>Phone:</strong> {billingInfo.phone}</p>
          <p><strong>Address:</strong> {billingInfo.address}, {billingInfo.city}, {billingInfo.state} - {billingInfo.postalCode}</p>
        </div>
      )}

      {cartItems?.length > 0 && (
        <div className="thankyou-section">
          <h3>📦 Order Summary</h3>
          <ul className="thankyou-order-items">
            {cartItems.map((item, idx) => (
              <li key={idx}>
                <img src={item.image} alt={item.title} />
                <div>
                  <p><strong>{item.title}</strong></p>
                  <p>{item.type}</p>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Price: {item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total Amount: ₹{calculateTotal()}</h4>
        </div>
      )}
      <div className='ghar_ka_div'>
          <button className='ghar' onClick={() => navigate('/')}> Return to Home </button>
      </div>

      
    </div>
  );
}

export default ThankYou;
