import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home'; 
import ProductDetails from './components/product-page/product';
import SingleProduct from './components/product-page/singlepro';
import Footer from './components/footer/footer';
import Cart from './components/cart/cart';
import Wishlist from './components/cart/wishlist';
import Checkout from './components/cart/checkout';
import ThankYou from './components/cart/ThankYou';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login status

  // Add to Cart
  const handleAddToCart = (item) => {
    const alreadyInCart = cartItems.some((cartItem) => cartItem.title === item.title);
    if (alreadyInCart) {
      alert('Item is already in cart');
      return;
    }
    setCartItems([...cartItems, item]);
    alert('Added to cart');
  };

  // Add to Wishlist
  const handleAddToWishlist = (item) => {
    const alreadyInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.title === item.title);
    if (alreadyInWishlist) {
      alert('Item is already in wishlist');
      return;
    }
    setWishlistItems([...wishlistItems, item]);
    alert('Added to wishlist');
  };

  return (
    <Router basename="/plumbing">
      <div className="navbar">
        <Navbar
          cartItems={cartItems}
          wishlistItems={wishlistItems}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route 
            path="/product" 
            element={
              <ProductDetails 
                addToCart={handleAddToCart}
                addToWishlist={handleAddToWishlist}
                isLoggedIn={isLoggedIn}
              />
            } 
          />

          <Route 
            path="/singlepro" 
            element={
              <SingleProduct 
                addToCart={handleAddToCart}
                addToWishlist={handleAddToWishlist}
                isLoggedIn={isLoggedIn}
              />
            } 
          />

          <Route path="/cart" element={<Cart cartItems={cartItems} />} />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistItems={wishlistItems}
                setWishlistItems={setWishlistItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </main>

      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
