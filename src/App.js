import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import CourseCard from './componets/course-card/CourseCard';
import Home from './componets/home/Home';

export default function App() {
  return (
    <>
      <Router>
        <div className="fd-wrapper">
          <nav className="sidebar">
            <ul className="sidebar__content">
              <li className="sidebar__content-item">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="sidebar__content-item">
                <Link to="/cours" className="link">
                  Course Card
                </Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Switch>
              <Route path="/cours">
                <CourseCard />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}
