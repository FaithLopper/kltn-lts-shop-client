import React from 'react'
import Home from './home/Home'
import New from './new/New'
import Product from './product/Product'

const AppBody = () => {
  return (
    <main className='main'>
      <Home/>
      <Product/>
      <New/>
    </main>
  )
}

export default AppBody