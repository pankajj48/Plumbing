import "./navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaPhoneAlt, FaFacebookF, FaYoutube, FaShoppingCart as FaCart, FaHeart
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import {
  CiSearch, CiHeart, CiShoppingCart, CiUser, CiBellOn
} from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

function NavSec({ cartItems, wishlistItems, isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (location.pathname === "/") setActiveTab("home");
    else if (location.pathname === "/about") setActiveTab("about");
    else if (location.pathname === "/product") setActiveTab("product");
    else if (location.pathname === "/contact") setActiveTab("contact");
    else if (location.pathname === "/cart") setActiveTab("cart");
    else if (location.pathname === "/wishlist") setActiveTab("wishlist");
    else setActiveTab("");
  }, [location.pathname]);

  const goTo = (path, tab) => {
    setActiveTab(tab);
    navigate(path);
    setShowLogin(false);
    setShowSidebar(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    alert("You have been logged out.");
    setShowSidebar(false);
    navigate('/');
  };

  return (
    <section id="nav-sec">
      {/* --- Top Section --- */}
      <div className="up">
        <div className="leftwala">
          <FaLocationDot className="up-icon" />
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <MdEmail className="up-icon" /> PlumbingBazzar@gmail.com
          </div>
          <FaPhoneAlt className="up-icon" />
        </div>

        <div className="rightwala">
          <div className="facebook up-icon"><FaFacebookF /></div>
          <div className="youtube up-icon"><FaYoutube /></div>
          <div className="instagram up-icon"><FaInstagram /></div>
        </div>
      </div>

      <hr />

      {/* --- Navigation Bar --- */}
      <div className="down">
        <div className="links">
          <div className="logo">
            <img src="/logo-f.png" alt="Logo" />
          </div>

          <nav>
            <li className={activeTab === "home" ? "active" : ""} onClick={() => goTo("/", "home")}>Home</li>
            <li className={activeTab === "about" ? "active" : ""} onClick={() => goTo("/about", "about")}>About Us</li>
            <li>
              <select name="product">
                <option value="">SANITARYWARE</option>
                <option value="">FAUCETS</option>
                <option value="">ACCESSORIES</option>
                <option value="">KITCHEN SINKS</option>
              </select>
            </li>
            <li className={activeTab === "contact" ? "active" : ""} onClick={() => goTo("/contact", "contact")}>Contact</li>
          </nav>
        </div>

        <div className="loginwale">
          <div className="login-btn">
            {isLoggedIn ? (
              <button id="logout" onClick={handleLogout}>Logout</button>
            ) : (
              <button id="login" onClick={() => setShowLogin(true)}>Join Us / Log In</button>
            )}
          </div>

          <div className="icons">
            <button><CiSearch className="up-icon" /></button>
            <button onClick={() => goTo("/wishlist", "wishlist")}>
              <CiHeart className={`up-icon ${activeTab === "wishlist" ? "active" : ""}`} />
            </button>
            <button><CiBellOn className="up-icon" /></button>
            <button><CiUser className="up-icon" onClick={() => setShowSidebar(true)} /></button>
            <button onClick={() => goTo("/cart", "cart")}>
              <CiShoppingCart className={`up-icon ${activeTab === "cart" ? "active" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar for Mobile --- */}
      <div className="bottombar">
        <div onClick={() => goTo("/", "home")}>
          <IoHome className={`btmlogo ${activeTab === "home" ? "active" : ""}`} />
        </div>
        <div onClick={() => goTo("/product", "product")}>
          <AiFillProduct className={`btmlogo ${activeTab === "product" ? "active" : ""}`} />
        </div>

        <div className="logobtm">
          <img src="/logo-f.png" alt="Logo" />
        </div>

        <div onClick={() => goTo("/cart", "cart")}>
          <FaCart className={`btmlogo ${activeTab === "cart" ? "active" : ""}`} />
        </div>
        <div onClick={() => setShowSidebar(true)}>
          <FaUser className="btmlogo" />
        </div>
      </div>

      {/* --- Login Modal --- */}
      {showLogin && (
        <div className="login-modal">
          <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="extra-options">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
                <span className="forgot" style={{ cursor: 'pointer' }}>Forgot Password?</span>
              </div>

              <button type="submit" className="login-butn">Login</button>
            </form>

            <p className="signup-link">
              Don't have an account? <span onClick={() => alert("Redirect to register page")}>Sign up</span>
            </p>
            <button className="close-login" onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {/* --- User Sidebar + Overlay (Mobile) --- */}
      {showSidebar && (
        <div className="user-sidebar-overlay" onClick={() => setShowSidebar(false)}>
          <div className="user-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-content">
              <button className="close-sidebar" onClick={() => setShowSidebar(false)}>✖</button>
              {isLoggedIn ? (
                <>
                  <p>Welcome,</p>
                  <p className="user-email">{email}</p>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <p>New here?</p>
                  <button onClick={() => {
                    setShowSidebar(false);
                    setShowLogin(true);
                  }}>Join Us / Login</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default NavSec;
