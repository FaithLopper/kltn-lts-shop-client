import React from 'react'
import logo from '../../../../../../assets/svg/logo-500.svg'
const Nav = () => {
  return (
    <nav className="nav wrapper">
    <a href="index.html">
          <img src={logo} alt="shop" className="nav__logo"/>
      </a>
    </nav>
  )
}

export default Nav