import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Axios from 'axios';
import i18n from '../../i18n';

import './contact.css';

export default class Contact extends Component {
    state= {
        array: [],
        tel: [],
        streetsName: [],
        streetsNo: [],
        coutryId: [],
        cityId: [],
        counties: [],
        cities: [],
        lengthArray: 0
    };

    componentDidMount = async () => {
        Axios.get("https://localhost:44342/aboutRestaurant")
        .then((res) => {
            console.log(res.data);
            this.setState({ array: res.data })
            this.state.array.map(i => {
                this.setState({ tel: [...this.state.tel, i.tel]})
                this.setState({ streetsName: [...this.state.streetsName, i.location.streetName]})
                this.setState({ streetsNo: [...this.state.streetsNo, i.location.streetNo]})
                this.setState({ coutryId: [...this.state.coutryId, i.location.countryFK]})
                this.setState({ cityId: [...this.state.cityId, i.location.cityFK]})
                //console.log(i)
            })
            
            console.log("Telefoni: ");
            console.log(this.state.tel);
            console.log("Imena ulica: ");
            console.log(this.state.streetsName);
            console.log("Brojevi ulica: ");
            console.log(this.state.streetsNo);
            console.log("Drzave: ");
            console.log(this.state.coutryId);
            console.log("Gradovi: ");
            console.log(this.state.cityId);
        })
        .then(res => {
            let array = [];
            this.state.cityId.map(i => {
                array.push(Axios.get("https://localhost:44342/city/" + i))
            })
            Promise.all(array).then(resp => {
                console.log("Tu sam");
                let niz= [];
                for (let i=0; i<resp.length; i++){
                    let cityName = resp[i].data.name;
                    niz.push(cityName);
                }
                this.setState({ cities: niz });
                console.log(this.state.cities);
            })
        })
        .then(res => {
            let array2 = [];
            this.state.coutryId.map(i => {
                array2.push(Axios.get("https://localhost:44342/country/" + i))
            })
            Promise.all(array2).then(resp => {
                console.log("Tu sam 2");
                let niz2= [];
                for (let i=0; i<resp.length; i++){
                    let coutryName = resp[i].data.name;
                    niz2.push(coutryName);
                }
                this.setState({ counties: niz2 });
                console.log(this.state.counties);
                
            })
        })
        .then(resp => {
            console.log(resp);
        })
        .catch(e => console.log(e))
    }

    render(){
        let brojac = 0;
        return (
            <div className="body">
                
                <div id="contact-img"></div>
                <h1 id="contact">{i18n.t('Kontakt')}</h1>

                <div id="contact-main">
                    <div id="contact-information">
                        <h3 id="h-informations">{i18n.t('Kontakt informacije')}</h3>
                        <div id="informations">
                         { this.state.array.map(i => {

                                return (
                                    <div>
                                
                                    <div>
                                        <div id="address">
                                            <i className="fas fa-home" id="home-icon"></i>
                                            <div id="address-text">
                                                <h5>{i.location.streetName} br {i.location.streetNo}</h5>
                                                <p className="small-text">{this.state.cities[brojac]}, {this.state.counties[brojac]}</p>
                                            </div>
                                        </div>

                                        <div id="phone">
                                            <i className="fas fa-phone" id="phone-icon"></i>
                                            <div id="phone-text">
                                                <h5>{i.tel}</h5>
                                                <p className="small-text">{i18n.t('Ponedjeljak')}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <br />
                                        <br />

                                    </div>
                                </div>
                                )
                                brojac++;
                             })}

                            <div id="mail">
                                <i className="fas fa-envelope" id="mail-icon"></i>
                                <div id="mail-text">
                                    <h5>erestoran@gmail.com</h5>
                                    <p className="small-text">{i18n.t('Pošaljite Vaše upite')}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="contact-form-wrapper">
                        <h3 id="h-contact-us">{i18n.t('Kontaktirajte nas')}</h3>
                        <form id="form">
                            <div id="form-left">
                                <input className="input-field" type="text" placeholder={i18n.t('Ime')}/><br/>
                                <input className="input-field" type="text" placeholder={i18n.t('Prezime')}/><br/>
                                <input className="input-field" type="email" placeholder="Email"/><br/>
                            </div>
                            <div id="form-right">
                                <textarea id="textarea" placeholder={i18n.t('Poruka')} rows="5"></textarea><br/>
                            </div>
                            <div id="form-bottom">
                                <button id="submit-button" type="submit" href="/">{i18n.t('Pošalji')}</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="map">
                    <Iframe id="g-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.099000014355!2d18.388458550830684!3d43.853776679012434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c91805bdf4bb%3A0xd2551a65dc106694!2sZmaja%20od%20Bosne%2033%2C%20Sarajevo%2071000!5e0!3m2!1shr!2sba!4v1586358819977!5m2!1shr!2sba" 
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                </div>
            </div>
        )
    }
}