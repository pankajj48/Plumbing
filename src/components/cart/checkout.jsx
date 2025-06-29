// src/components/cart/checkout.jsx
import './checkout.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  // Billing form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [billingState, setBillingState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const billingInfo = {
      fullName,
      email,
      phone,
      address,
      city,
      state: billingState,
      postalCode,
    };

    navigate('/ThankYou', {
      state: {
        billingInfo,
        cartItems,
        totalAmount: calculateTotal()
      },
    });
  };

  // Total price calculation
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[₹,]/g, '')) || 0;
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <>
    <section className='checkcont'>
      <div className="checkout-container">
        <h2>Checkout</h2>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h4>Billing Information</h4>
            <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <input type="text" placeholder="Shipping Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
            <input type="text" placeholder="State" value={billingState} onChange={(e) => setBillingState(e.target.value)} required />
            <input type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
          </div>

          <div className="form-section">
            <h4>Payment Details</h4>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Cardholder Name" required />
            <div className="card-details">
              <input type="text" placeholder="MM/YY" required />
              <input type="text" placeholder="CVV" required />
            </div>
          </div>

          <button type="submit" className="checkout-btn">Place Order</button>
        </form>

        {cartItems.length > 0 && (
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cartItems.map((item, index) => (
              <div key={index} className="summary-item">
                <span>{item.title}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <div className="summary-total">
              <strong>Total: ₹{calculateTotal()}</strong>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default Checkout;
