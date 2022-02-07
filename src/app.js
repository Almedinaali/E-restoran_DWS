import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

import About from './components/About/about';
import Welcome from './components/Welcome/welcome';
import Register from './components/Register/register';
import History from './history';
import Homepage from './components/Homepage/homepage';
import Contact from './components/Contact/contact';
import Menu  from './components/Menu/menu';
import './app.css';
import Recipe from "./components/Recipe/recipe";
import Chat from './components/Chat/chat';
import PublicChat from './components/PublicChat/publicChat';


function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <Router history={History}>
      <div> 
        <nav>
          <header className="container">
                        
            <Navbar expand="lg" className="nvb" variant="dark" fixed="top">
                <Navbar.Brand className="navlink" as={Link} to="/">
                  <button onClick={() => changeLanguage('ba')} className="lang-btn">ba</button>|
                  <button onClick={() => changeLanguage('en')} className="lang-btn">en</button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="nvbcollapse">
                    <Nav className="navnav ml-auto">
                        <Nav.Link className="navlink" as={Link} to="/">{t('Početna')}</Nav.Link>
                        <Nav.Link className="navlink" as={Link} to="/about">{t('O nama')}</Nav.Link>
                        <Nav.Link className="navlink" as={Link} to="/menu">{t('Menu')}</Nav.Link>
                        <NavDropdown className="navlink" title={<span className="navlink">{t('Usluge')}</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">{t('Rezervacija')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">{t('Dostava')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/homepage">{t('Naslovna')}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/recipe">{t('Recepti')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/privateChat">{t('Chat')}</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="navlink" to="/contact" as={Link}>{t('Kontakt')}</Nav.Link>
                        { localStorage.getItem("token")==null ? <Nav.Link as={Link} className="navlink" to="/users/register">{t('Prijava')}</Nav.Link>
                        : <Nav.Link as={Link} className="navlink" to="" onClick={() => { localStorage.removeItem("token"); }}>{t('Odjava')}</Nav.Link> }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

          </header>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div id="switch">
          <Switch>
            {localStorage.getItem("token") == null ? (<div>
            <Route exact path="/">
              <Welcome />
            </Route>
            
            <Route path="/users/register">
              <Register />
            </Route>
            
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/recipe">
              <Recipe />
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>

            <Route path="/pubChat">
              <PublicChat />
            </Route>

            </div>) : (<div>
              <Route exact path="/">
              <Welcome />
            </Route>
            
            <Route path="/users/register">
              <Register />
            </Route>
            
            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/recipe">
              <Recipe />
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>

            <Route path="/pubChat">
              <PublicChat />
            </Route>

            <Route path="/privateChat">
              <Chat />
            </Route>

            <Route path="/homepage">
              <Homepage />
            </Route>

            </div> )}
          </Switch>
        </div>

      <footer className="footer">         
          <div id="footer-left" className="footer-part">
            <h3><span className="footer-heading">{t('Kontakt')}</span></h3>
            <div id="footer-contact" className="sub-footer">
              <div id="footer-address">
                  <i className="fas fa-home" id="footer-home-icon"></i>
                  <p><span className="footer-text">Zmaja od Bosne 33</span></p>
              </div>

              <div id="footer-phone">
                  <i className="fas fa-phone" id="footer-phone-icon"></i>
                  <p><span className="footer-text">+387 33 10 10 10</span></p>
              </div>

              <div id="footer-mail">
                  <i className="fas fa-envelope" id="footer-mail-icon"></i>
                  <p><span className="footer-text">erestoran@gmail.com</span></p>
              </div> 
            </div>         
          </div>

          <div id="footer-center" className="footer-part">
            <h3><span className="footer-heading">{t('Linkovi')}</span></h3>
            <div id="footer-links" className="sub-footer"> 
              <p><Link className="link" to="/"><span className="footer-text">{t('Rezervacija')}</span></Link></p>
              <p><Link className="link" to="/Menu"><span className="footer-text">{t('Menu')}</span></Link></p>
              <p><Link className="link" to="/"><span className="footer-text">{t('Dostava')}</span></Link></p>
              <p><Link className="link" to="/contact"><span className="footer-text">{t('Kontaktirajte nas')}</span></Link></p> 
            </div>
          </div>

          <div id="footer-right" className="footer-part">
            <h3><span className="footer-heading">{t('Radno vrijeme')}</span></h3>
            <div className="sub-footer"> 
              <p><span className="footer-text">{t('Ponedjeljak - Subota')} <span className="hours">  9:00 - 23:00</span></span></p>
              <p><span className="footer-text">{t('Nedjelja')} <span className="hours">                       10:00 - 22:00</span></span></p> 
            </div><br/>
            <h3><span className="footer-heading">{t('Pratite nas')}</span></h3>
            <div id="socials" className="sub-footer">
              <a href="https://www.instagram.com/" target="_blank"><i className="socials-icon fab fa-instagram" href="https://www.facebook.com/"></i></a> 
              <a href="https://www.facebook.com/" target="_blank"><i className="socials-icon fab fa-facebook-square"></i></a>
              <a href="https://twitter.com/" target="_blank"><i className="socials-icon fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/" target="_blank"><i className="socials-icon fab fa-linkedin-in"></i></a>
            </div>                    
          </div>
          
          <div id="bottom">
            <p id="copyright">Copyright © 2020 E-restoran</p>
          </div>
      </footer>
      </div>
    </Router>
  );
}
export default withNamespaces()(App);
