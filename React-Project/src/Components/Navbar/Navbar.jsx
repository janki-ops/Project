import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const[menu,setMenu]=useState("home")
  const {getTotalCartItems} =useContext(ShopContext)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div className='navbar'>
  <div className="nav-logo">
    <img src={logo} alt="logo" height="50px" />
    <p>Shopify</p>
  </div>

 

<ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
    <li onClick={()=>setMenu("home")}><Link to="/">Home</Link>{menu==="home" && <hr/>}</li>
    <li onClick={()=>setMenu("mens")}><Link to="/mens">Men</Link>{menu==="mens" && <hr/>}</li>
    <li onClick={()=>setMenu("womens")}><Link to="/womens">Women</Link>{menu==="womens" && <hr/>}</li>
    <li onClick={()=>setMenu("kids")}><Link to="/kids">Kids</Link>{menu==="kids" && <hr/>}</li>
  </ul>

  <div className="nav-login-cart">
    <Link to="/login"><button>Login</button></Link>
    <Link to="/cart"><img src={cart_icon} alt="cart" height="40px" /></Link>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
  </div>
  
</div>
  )
}

export default Navbar