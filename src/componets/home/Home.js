import React from 'react'
import './index.scss'
import logo from 'assets/logo.jpg';

function Home() {
  return (
    <div className="home-wrapper">
      <img src={logo} alt="home logo" className="home-wrapper__image" />
      <p className="home-wrapper__content">
        <span>🖥</span> Hi, my name is Caner.
      </p>
      <p className="home-wrapper__content">This is my Front-End world. </p>
      <p className="home-wrapper__content">
        From the left menu, you can look at the work I do in my daily spare
        time.
      </p>
      <p>People who want to add can add here with their pictures.</p>
    </div>
  );
}

export default Home
