import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Nav.css"

const Nav = () => {

  const [isscroll, setisscroll] = useState(false);


  function isScrolling() {
      if (window.scrollY > 80) {
      setisscroll(true);
      } else {
      setisscroll(false);
      }
  }
  useEffect(() => {
      window.addEventListener("scroll", isScrolling);
      return () => {
      window.removeEventListener("scroll");
      }
  }, [])

  return (
    <div className={isscroll===true? 'outerBoxScroll' : 'outerBox'}>
      <div className='innerBox'>
        <div className='logobox'>
            <Link to="/" ><img className='logo' src="https://www.furation.tech/images/Group-1000005795.svg" alt="logo" /></Link>
        </div>
        <div className='linksbox'>
            <Link className='link' to="/register">Register</Link>
            <Link className='link' to="/login">Login</Link>
            <Link className='link' to="/admindashboard">Admin Dashboard</Link>
            <Link className='link' to="/about">About us</Link>
            <Link className='link' to="/contact">Contact us</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav