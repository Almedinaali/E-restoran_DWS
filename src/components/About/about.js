import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import i18n from '../../i18n';

import './about.css';

export default class Contact extends Component {
    render() {
        return(
            <div>
                <div id="about-page-img"></div>
                <h1 id="about-page">{i18n.t('O nama')}</h1>

                <div id="about">
                    <div className="img">
                        <img src={require("../Images/about.jpg")} id="about-img"/>
                    </div>
                    <div className="img" id="sec-pic">
                        <img src={require("../Images/about1.jpg")} id="about-img2"/>
                    </div>

                    <div className="wrapper">
                        <h3 id="about-subh" className="subheading">{i18n.t('Restoran')}</h3>
                        <p id="about-p">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <p id="about-num">+387 33 10 10 10</p>
                        <Button as={Link} to="/" variant="outline-warning" className="order-btn" id="rezervisi-btn">{i18n.t('Pogledajte menu')}</Button>
                    </div>
                </div>

                <div id="about2">
                    <div className="wrapper">
                        <h3 id="about-subh" className="subheading">{i18n.t('Kuhinja')}</h3>
                        <p id="about-p">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <p id="about-num">+387 33 10 10 10</p>
                        <Button as={Link} to="/" variant="outline-warning" className="order-btn" id="rezervisi-btn">{i18n.t('Rezervišite mjesto')}</Button>
                    </div>

                    <div className="img">
                        <img src={require("../Images/restaurant-img1.jpg")} id="about-img"/>
                    </div>
                    <div className="img" id="sec-pic">
                        <img src={require("../Images/restaurant-img2.jpg")} id="about-img2"/>
                    </div>
                </div>

                <div id="about-gallery">
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