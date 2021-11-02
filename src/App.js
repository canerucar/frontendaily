import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import './Menu.scss';
import CourseCard from './componets/course-card/CourseCard';
import Home from './componets/home/Home';
import Footer from 'componets/footer-ui/Footer';
import { elastic as Menu } from 'react-burger-menu';

export default function App() {
  return (
    <>
      <Router>
        <div className="fd-wrapper" id="outer-container">
          <Menu outerContainerId={ "outer-container" }>
            <Link to="/" className="menu-item">Home</Link>
            <Link to="/cours" className="menu-item">Course Card</Link>
            <Link to="/footer" className="menu-item">Footer</Link>
          </Menu>
          <main className="content">
            <Switch>
              <Route path="/cours">
                <CourseCard />
              </Route>
              <Route path="/footer">
                <Footer />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
          </div>
      </Router>
    </>
  );
}
