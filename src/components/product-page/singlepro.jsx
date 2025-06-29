import './singlepro.css'; 
import { useNavigate } from 'react-router-dom';
import Product from '../../assets/product.jpg';
import warranty from '../../assets/warr.jpg';
import Purp from '../../assets/purp.jpg';
import drain from '../../assets/drain.jpg';
import COD from '../../assets/COD.png';
import EP from '../../assets/EP.png';
import TB from '../../assets/TB.png';

function SingleProduct({ addToCart, addToWishlist }) {
  const navigate = useNavigate(); 

  const productData = {
    title: 'JOHNSON BATHROOMS RUBY FLOOR STANDING COMMODE',
    image: Product,
    type: 'Floor standing EWC | P0447PW0101 (S Trap)',
    dimensions: '360x540x400mm',
    price: '₹ 1,758.75',
    oldPrice: '₹2,345.00',
  };

  const handleAddToCart = () => {
    addToCart(productData);          // ✅ Add item to cart
    navigate('/cart');               // ✅ Redirect to cart
  };

  const handleAddToWishlist = () => {
    addToWishlist(productData);      // ✅ Add item to wishlist
    navigate('/wishlist');           // ✅ Redirect to wishlist
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-left">
          <div className="main-image">
            <img src={Product} alt="Product Main" />
          </div>
          <div className="thumbnail-row">
            <img src={Product} alt="thumb1" />
            <img src={warranty} alt="warranty" />
            <img src={Purp} alt="dimensions" />
            <img src={drain} alt="strap" />
          </div>
        </div>

        <div className="cart-right">
          <h2>{productData.title}</h2>
          <p className="subtext">
            {productData.type} | Dimensions: {productData.dimensions}
          </p>
          <span className="ratings">0 Ratings</span>

          <div className="price-section">
            <span className="offer-price">{productData.price}</span>
            <span className="mrp">MRP {productData.oldPrice}</span>
          </div>

          <div className="features-row">
            <div className="feature-box"><img src={COD} alt="" /><div>Cash on Delivery</div></div>
            <div className="feature-box"><img src={EP} alt="" /><div>Top Brand</div></div>
            <div className="feature-box"><img src={TB} alt="" /><div>Exchange Policy</div></div>
          </div>

          <div className="offer-code">
            Flat 2% OFF on Amount - ₹10000 (COD & Prepaid) - Use code <b>pbazzar002</b><br />
            Flat 3% OFF on Prepaid - Use code <b>pbazzar003</b>
          </div>

          <div className="delivery">🚚 Expected delivery in 5 to 10 days.</div>
          <div className="discount-badge">Save 25.00%</div>

          <div className="quantity-section">
            <button>-</button>
            <input type="text" value="1" readOnly />
            <button>+</button>
          </div>

          <div className="action-buttons">
            <button className="add-cart" onClick={handleAddToCart}>Add To Cart</button>
            <button className="add-favorite" onClick={handleAddToWishlist}>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
