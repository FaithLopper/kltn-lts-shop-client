import React from 'react'
import Banner from './Banner'
import './_home.scss'
const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container">
            <Banner/>
        </div>
    </section>
  )
}

export default Home