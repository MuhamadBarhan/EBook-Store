import React, { useRef, useState ,useEffect } from 'react'
import '../Styles/navbar.css'
import Logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Function to handle click outside the navbar
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="logo"><span className='book'>e-Book</span><span className='store'>Store</span></div>
      <div className="desktopMenu">
        <div className="wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" id='search' />
          <input type="text" placeholder="Search..." className='search-container' id='search' />
        </div>
        <Link activeClass='active' className="desktopMenuListItem"><FontAwesomeIcon icon={faBell} /> Notifications</Link>
        <Link activeClass='active' to='/cart' className="desktopMenuListItem"><FontAwesomeIcon icon={faCartShopping} /> Cart</Link>
        <Link activeClass='active' to='/wishlist' className="desktopMenuListItem"><FontAwesomeIcon icon={faHeart} /> Wishlist</Link>
        <Link activeClass='active' to="/login" className="desktopMenuListItem"><FontAwesomeIcon icon={faUser} />  Login</Link>
        {/*<Link to='/signup'><button className="signupBtn">Sign Up</button></Link>*/}
      </div>

      <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} className='burger-menu' />
      <div className={`navMenu ${showMenu ? 'show' : ''}`}>
        <Link className="ListItem" onClick={closeMenu}><FontAwesomeIcon icon={faBell} /> Notifications</Link>
        <Link to='/cart' className="ListItem" onClick={closeMenu}><FontAwesomeIcon icon={faCartShopping}/> Cart</Link>
        <Link to='/wishlist' className="ListItem" onClick={closeMenu}><FontAwesomeIcon icon={faHeart}/> Wishlist</Link>
        <Link to="/login" className="ListItem" onClick={closeMenu}><FontAwesomeIcon icon={faUser}/>  Login</Link>
        <Link to="/signup" className="ListItem" onClick={closeMenu}><FontAwesomeIcon icon={faUserPlus}/>  Signup</Link>
        
      </div>



    </nav>
  )
}

export default Navbar


