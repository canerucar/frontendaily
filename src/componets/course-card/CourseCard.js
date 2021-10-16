import React from 'react';
import './index.scss';
import SteveJobs from 'assets/steve-jobs.png';
import Vector from 'assets/vector.png';

function CourseCard() {
  return (
    <>
      <section className="course-wrapper">
        <main className="course-wrapper__content">
          <img src={SteveJobs} alt="Steve Jobs" className="course-wrapper__content-img" / >
          <div className="course-wrapper__content-round">
            <img src={Vector} alt="vector" className="vector" />
          </div>
          <div className="course-wrapper__content-price">
            <div className="left">
              <span className="left-top">Kr599</span>
              <span className="left-bottom">Kr189</span>
            </div>
            <div className="right">68% off</div>
          </div>
          <div className="course-wrapper__content-buttons">
            <button className="item"> Buy now </button>
            <button className="item"> Add to cart </button>
            <p className="text">30-Day Money-Back Guarantee</p>
          </div>
          <div className="course-wrapper__content-footer">
            <h4 className="title">Includes</h4>
            <ul className="list">
              <li>3.5 hours on-demand video</li>
              <li>Full lifetime access</li>
              <li>Exercise files</li>
              <li>Access from anywhere</li>
              <li>Certificate on completion</li>
            </ul>
          </div>
        </main>
      </section>
    </>
  )
}

export default CourseCard
