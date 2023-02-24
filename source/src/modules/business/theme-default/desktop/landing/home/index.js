import React from 'react';
import Banner from './Banner';
import './Home.scss';
const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__container">
                <Banner />
            </div>
        </section>
    );
};

export default Home;
