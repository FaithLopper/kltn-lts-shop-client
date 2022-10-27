import React from 'react'

const Menu = (props) => {
    const {NavigatorMenu} = props
  return (
    <div className="menu wrapper">
    <div className="menu">
      <ul className="menu__list grid">
        {
          NavigatorMenu && NavigatorMenu.map(({refKey,title})=> <li className="menu__item">
          <a href={refKey} className="menu__link">
            {title}
          </a>
        </li>
          )
        }
      </ul>
    </div>
  </div>
  )
}

export default Menu