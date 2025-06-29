import './product.css';
import { useNavigate } from 'react-router-dom';
import Producttop from '../../assets/producttopimg.png';
import { useEffect, useState } from 'react';

function Productdetails({ addToCart, addToWishlist, isLoggedIn }) {
  const navigate = useNavigate();
  const [offerItems, setOfferItems] = useState([]);

  const handleAddToCart = (item) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to the cart.");
      return;
    }
    addToCart(item);
  };

  const handleAddToWishlist = (item) => {
    if (!isLoggedIn) {
      alert("Please log in to add items to the wishlist.");
      return;
    }
    addToWishlist(item);
  };

  const productpage = () => {
    navigate('/singlepro');
  };

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}product.json`)
      .then((res) => res.json())
      .then((data) => {
        setOfferItems(data);
      })
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <>
      <div className="top-img">
        <div className="imgsec">
          <img src={Producttop} alt="Top section" />
        </div>
      </div>

      <div className="offer-products-section">
        <h2>Offer Products</h2>

        {offerItems.length === 0 ? (
          <p style={{ padding: '20px', textAlign: 'center' }}>Loading products...</p>
        ) : (
          <div className="offer-grid">
            {offerItems.map((item) => (
              <div
                key={item.id}
                className="offer-card"
                style={{ cursor: 'pointer' }}
                onClick={productpage}
              >
                <img src={item.image} alt={item.title} />
                <p><strong>{item.title}</strong></p>
                <p>{item.type}</p>
                <p>Dimensions: {item.dimensions}</p>
                <span style={{ color: 'green', fontWeight: 'bold' }}>{item.price}</span>{' '}
                <span style={{ textDecoration: 'line-through', color: '#888' }}>{item.oldPrice}</span>
                <br />
                <button
                  className="button-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  + Add to Cart
                </button>

                <button
                  className="button-wishlist"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToWishlist(item);
                  }}
                >
                  ♡ Add to Wishlist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Productdetails;
