import './cart.css'; // or wishlist.css
import { useNavigate } from 'react-router-dom';

function Wishlist({ wishlistItems, setWishlistItems, cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleRemove = (index) => {
    const updatedWishlist = [...wishlistItems];
    updatedWishlist.splice(index, 1);
    setWishlistItems(updatedWishlist);
  };

  const handleMoveToCart = (item, index) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    handleRemove(index);
    navigate('/cart');
  };

  return (
    <div className="wishlist-container">
      <h3 className="wishlist-title">Your Wishlist</h3>

      {wishlistItems.length === 0 ? (
        <p className="wishlist-empty-msg">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items-list">
          {wishlistItems.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.image} alt={item.title} />
              <div className="wishlist-item-details">
                <p><strong>{item.title}</strong></p>
                <p>{item.type}</p>
                <p>Dimensions: {item.dimensions}</p>
                <p>Price: {item.price}</p>

                <div className="wishlist-btn-group">
                  <button className="wishlist-move-cart-btn" onClick={() => handleMoveToCart(item, index)}>
                    Move to Cart
                  </button>
                  <button className="wishlist-remove-btn" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
