import React, { Component } from 'react';
import Axios from 'axios';
//import './homepage.css';


export default class Homepage extends Component {
    state= {
        array: [],
        coutryId: [],
        cityId: [],
        counties: [],
        cities: [],

    };

    componentDidMount = async () => {
        Axios.get("https://localhost:44342/aboutRestaurant")
        .then((res) => {
            console.log(res.data);
            this.setState({ array: res.data })
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

    /*obrisi =(unitId) => {
        Axios.delete("https://localhost:44342/restaurantUnits/" + unitId)
        .then(resp => {
            alert("OBRISANO");
        })
        .catch(e => console.log(e))
    }*/

    render(){
        let brojac = 0;
        return(
            <div>
                <div>
                    <h2>Ukoliko želite promijeniti informacije o nekoj Vašoj poslovnici, popunite sljedecu formu: </h2>

                </div>
                <div>
                    <h2>A ukoliko želite izbrisati iz baze neku poslovnicu kliknite na dugme " OBRIŠI ".</h2>
                    <div id="contact-information">
                        <h3 id="h-informations">Kontakt Informacije</h3>
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
                                                <p className="small-text">Ponedjeljak - Nedjelja 09:00 - 23:00</p>
                                            </div>
                                        </div>
                                        <button /*onClick={this.obrisi(i.unitId)} */ >OBRIŠI</button>
                                    </div>

                                    <div>
                                        <br />
                                        <br />

                                    </div>
                                </div>
                                )
                                brojac++;
                             })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}