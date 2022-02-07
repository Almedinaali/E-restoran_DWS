import React from 'react';

import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import i18n from '../../i18n';
import './welcome.css';
import Chat from '../Chat/chat';


export default class Welcome extends React.Component {
    state = {
        h: 0,
        min: 0,
        sec: 0,

        mess: ""
    }

    componentDidMount() {
        setInterval(() => {
            let time = new Date();
            this.setState({
                h: time.getHours(),
                min: time.getMinutes(),
                sec: time.getSeconds()
            })

            if (time.getHours() <= 11 ) {
                this.setState({
                    mess: "Good morning!"
                })
            } else if (time.getHours() > 11 && time.getHours() <= 18)
                this.setState({ mess: "Good day!"})
            else this.setState({ mess: "Good evening!"})
        }, 1000)
        
    }

    
    render() {
        return (
            <div className="body">

	            <div id="slide-background"></div>
                <div id="head">
                    <h1 id="naslov">{i18n.t('Dobro došli')}</h1>
                    <p id="podnaslov">{i18n.t('Zdravo i ukusno')}</p>
                    <Link to="/pubChat">
                        <Button variant="warning" id="chat-btn" className="homebtn p-3 px-xl-4 py-xl-3">{i18n.t('Chat')}</Button>
                    </Link>
                    <Link to="/menu">
                        <Button variant="outline-light" className="homebtn p-3 px-xl-4 py-xl-3" >{i18n.t('Pogledaj Menu')}</Button>
                    </Link>
                </div>

                <div className="main">

                    <div id="about">
                        <div className="img">
                            <img src={require("../Images/about.jpg")} id="about-img"/>
                        </div>
						<div className="img" id="sec-pic">
                            <img src={require("../Images/about1.jpg")} id="about-img2"/>
                        </div>

                        <div className="wrapper">
                            <h2 id="about-h" className="heading">{i18n.t('O nama')}</h2>
                            <h3 className="subheading">{i18n.t('Restoran')}</h3>
                            <p id="about-p">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <p id="about-num">+387 33 10 10 10</p>
                        </div>
                    </div>


                    <div id="menu-specialties">

                        <div id="specialties-heading">
                            <h2 id="specijaliteti-h" className="heading">{i18n.t('Specijaliteti')}</h2>
                            <h3 id="specijaliteti-subh" className="subheading">{i18n.t('Naš menu')}</h3>
                        </div>

                        {/** kartice specijaliteta menija */}
                        <div id="cards">
                            <CardDeck>
                                <Card className="card">
                                    <CardImg top width="100%" src={require("../Images/menu/dinner-1.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="dish-name">{i18n.t('Pohovana piletina')}</CardTitle> 
                                        <CardSubtitle className="price">12KM</CardSubtitle>                             
                                        <CardText className="ingredients">{i18n.t('Piletina')}</CardText>
                                        <Button as={Link} to="/" variant="outline-warning" className="order-btn">{i18n.t('Naruči')}</Button>
                                    </CardBody>
                                </Card>
                                <Card className="card">
                                    <CardImg top width="100%" src={require("../Images/menu/lunch-4.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="dish-name">{i18n.t('Pohovana piletina')}</CardTitle>
                                        <CardSubtitle className="price">12KM</CardSubtitle>
                                        <CardText className="ingredients">{i18n.t('Piletina')}</CardText>
                                        <Button as={Link} to="/" variant="outline-warning" className="order-btn">{i18n.t('Naruči')}</Button>
                                    </CardBody>
                                </Card>
                                <Card className="card">
                                    <CardImg top width="100%" src={require("../Images/menu/lunch-3.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="dish-name">{i18n.t('Pohovana piletina')}</CardTitle>
                                        <CardSubtitle className="price">12KM</CardSubtitle>
                                        <CardText className="ingredients">{i18n.t('Piletina')}</CardText>
                                        <Button as={Link} to="/" variant="outline-warning" className="order-btn">{i18n.t('Naruči')}</Button>
                                    </CardBody>
                                </Card>
                            </CardDeck>

                            <div className="buttons" id="menu-buttons">
                                <Button as={Link} to="/Menu" variant="outline-warning" className="dir-btn">{i18n.t('Pogledajte menu')}</Button>
                                <span id="separator">|</span>
                                <Button as={Link} to="/" variant="outline-warning" className="dir-btn">{i18n.t('Rezervišite mjesto')}</Button>
                            </div>
                            
                        </div>
                    </div>

                    <div id="recipes">
                        <div id="recipes-heading">
                            <h2 id="recipes-h" className="heading">{i18n.t('Najbolji')}</h2>
                            <h3 id="recipes-subh" className="subheading">{i18n.t('Recepti')}</h3>
                        </div>

                        <div id="recipes-cards">
                            <CardDeck>
                                <Card className="recipe-card">
                                    <CardImg className="card-image" top width="100%" src={require("../Images/recipes/rec1.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="recipe-name">{i18n.t('Tortilja')}</CardTitle>                             
                                        <CardText className="stars">
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                        </CardText>
                                    </CardBody>
                                </Card>
                                <Card className="recipe-card">
                                    <CardImg className="card-image" top width="100%" src={require("../Images/recipes/rec2.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="recipe-name">{i18n.t('Tortilja')}</CardTitle>
                                        <CardText className="stars">
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                        </CardText>
                                    </CardBody>
                                </Card>
                                <Card className="recipe-card">
                                    <CardImg className="card-image" top width="100%" src={require("../Images/recipes/breakfast-7.jpg")} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="recipe-name">{i18n.t('Tortilja')}</CardTitle>
                                        <CardText className="stars">
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                            <i className="star fas fa-star"></i>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                        </div>
                        <div className="buttons">
                            <Button as={Link} to="/Recipe" variant="outline-warning" className="dir-btn">{i18n.t('Pogledajte recepte')}</Button>
                            <span id="separator">|</span>
                            <Button as={Link} to="/" variant="outline-warning" className="dir-btn">{i18n.t('Dodajte recepte')}</Button>
                        </div>
                    </div>

                    <div id="customer-pics">

                    </div>
                </div>

                <div id="arrow">
                    <a href="#" class="to-top"></a>
                </div>

                <div id="mini-gallery">
                    <div className="image-div">
                        <img src={require("../Images/customer-images/img1.jpg")} id="image1" className="image" />
                    </div>

                    <div className="image-div">
                        <img src={require("../Images/customer-images/img2.jpg")} id="image2" className="image"/>
                    </div>

                    <div className="image-div">
                        <img src={require("../Images/customer-images/img5.jpg")} id="image3" className="image"/>
                    </div>

                    <div className="image-div">
                        <img src={require("../Images/customer-images/img8.jpg")} id="image3" className="image"/>
                    </div>

                    <div className="image-div">
                        <img src={require("../Images/customer-images/img3.jpg")} id="image3" className="image"/>
                    </div>

                    <div className="image-div">
                        <img src={require("../Images/customer-images/img4.jpg")} id="image3" className="image"/>
                    </div>

                    <div className="image-div">
                        <img src={require("../Images/customer-images/img6.jpg")} id="image3" className="image"/>
                    </div>
                </div>
            </div>
        )
    }
}
