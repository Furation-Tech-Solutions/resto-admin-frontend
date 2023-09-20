import React from 'react'
import { Link } from 'react-router-dom'
import  styles from "../styles/Nav.css"

const Nav = () => {
  return (
    <div className='outerBox'>
      <div className='innerBox'>
        <div className='logobox'>
            <img className='logo' src="https://www.furation.tech/images/Group-1000005795.svg" alt="logo" />
        </div>
        <div className='linksbox'>
            <Link className='link'>Register</Link>
            <Link className='link'>Login</Link>
            <Link className='link'>About us</Link>
            <Link className='link'>Contact us</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav