import React, { useEffect, useState } from 'react';
import styles from "./Header.module.scss";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { auth } from '../../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice';
import { ShowOnLogin, ShowOnLogout } from '../hiddenLink/HiddenLink';


const logo  = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        carri<span>Shop.</span>
      </h2>
    </Link>
  </div>
)

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "")

const Cart = () => {
  const productsInCart = useSelector(state => state.cart.cart);
  return (
    <span className={styles.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>{productsInCart.length}</p>
      </Link>
    </span>
  );
}

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  

  //Monitor currently logged in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if(user.displayName == null) {
          const name = user.email.substring(0, user.email.indexOf("@"));
          const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
          setDisplayName(capitalName);
        } else {
          setDisplayName(user.displayName);
        }
        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayName,
          userID: user.uid,
        }));

      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  const hideMenu = () => {
    setShowMenu(false)
  };

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message)
    });
  };


  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div className={
            showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["hide-nav-wrapper"]}`}
            onClick={hideMenu}
            role="button"
          >
          </div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color='#fff' onClick={hideMenu} />
            </li>
            <li>
               <NavLink to="/" className={activeLink}>Home</NavLink>
            </li>
            <li>
               <NavLink to="/contact" className={activeLink}>About Us</NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <ShowOnLogout>
                <NavLink to="/login" className={activeLink}>Login</NavLink>
              </ShowOnLogout>
              
              <ShowOnLogout>
                <NavLink to="/register" className={activeLink}>Register</NavLink>
              </ShowOnLogout>

              <ShowOnLogin>
                <a href="/" style={{color: "#ff7722"}}><FaUserCircle size={16}/>Hi, {displayName} </a>
              </ShowOnLogin>

              <ShowOnLogin>
                <NavLink to="/order-history" className={activeLink}>My Orders</NavLink>
              </ShowOnLogin>
              
              <ShowOnLogin>
                <NavLink to="/"  onClick={logoutUser}>Logout</NavLink>
              </ShowOnLogin>
            </span>
            <Cart />
          </div>
        </nav>

        <div className={styles["menu-icon"]}>
          <Cart />
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
        </div>
      </div>
    </header>
   
  )
}

export default Header
