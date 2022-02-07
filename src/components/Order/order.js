import React, { Component, useState } from 'react';
import Axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactDOM from 'react-dom';


import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


export default class Order extends Component {
    state= {
      id: 0,
      recipe: [],
      price: 0,
      officialPrice: 0,
      bonusPrice: 0,
      offerStart: "",
      offerEnd: "",

      totalPrice: 0,
      orders: [],
      idFinish: false,
      modal: false,
      visibility: true,

      finalOrders: {},
      ordersName: [],
      ordersCol: []
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal }, () => {
            this.finish();
        })
    }

    componentDidMount =() => {
        let id = 0;
        Axios.get("https://localhost:44342/meals/recipes", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            console.log("Tu sam!");
            console.log(res);
            
            this.setState({
                recipe: res.data
            });
            //id = res.data.specialOffer;
            console.log(this.state);

        })
        .catch((e) => {
            console.log(e)
            alert("Niste logovani!");
        })
    }

    order =(sp, p, n) => {
        console.log("order", sp, p);
;        if (sp != null) {
            this.setState({ totalPrice: this.state.totalPrice + p - sp * p / 100});
            
        } else {
            this.setState({ totalPrice: this.state.totalPrice +  p });
        }
        this.setState({ orders: [...this.state.orders, n]});
        alert("Jedan proizvod naručen!");
    }

    mess =() => {
        ReactDOM.render(<p>Narudžba poslana!</p>, document.getElementById('body'));
        if (this.state.visibility == false){
            document.getElementById("narudzba").style.visibility = "hidden";
            document.getElementById("odustani").style.visibility = "hidden";
        }
    }
    
    finish =() => {
        this.setState({ visibility: false });
        this.setState({ isFinis: !this.state.isFinis });
        console.log("Funkcija Finish");
        var arr = this.state.orders;
        var a = [], b = [], prev;
        arr.sort();
        for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== prev ) {
                a.push(arr[i]);
                b.push(1);
            } else {
                b[b.length-1]++;
            }
            prev = arr[i];
        }
        console.log("NIzovi")
        console.log(a);
        console.log(b);

        let o = {};
        for (let i=0; i<a.length; i++){
            o[a[i]] = b[i]
        }
        this.setState({
            ordersName: a,
            ordersCol: b
        }, () => {
            console.log(this.state.ordersName);
            console.log(this.state.ordersCol);
        })
        
    }


    render(){
        return(
            <div>
                <div>
                    <Button color="danger" onClick={this.toggle}>Zavši narudžbu</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody id="body">
                            <ul>
                                {this.state.ordersName.map((o, i) => {
                                    return ( <li key={i}>{o}: {this.state.ordersCol[i]}</li> )
                                })}
                            </ul>
                            </ModalBody>
                            <ModalFooter id="footer">
                            <Button id="narudzba" onClick={this.mess}>OK</Button>{' '}
                            <Button id="odustani" color="secondary" onClick={this.toggle}>Prekini narudžbu</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div id="meal">
                    <div>
                        <h1>Trenutna cijena računa iznosi: {this.state.totalPrice}</h1>
                        <h3>Recepti: </h3>
                        { this.state.recipe.map((y, i) => {
                            
                            return <div key={i}>
                                <p name="officialPrice" ><b>Redovna cijene:</b> {y.price}</p>
                                <p name="bonusPrice"  >Nova cijena: { y.specialOffers[0]? y.price - y.specialOffers[0].discount * y.price / 100 : "Nema popusta"}</p>
                                <p name="offerStart" >Ponuda vrijedi od: {y.offerStart} </p>
                                <p name="offerEnd" >Ponuda vrijedi do: {y.offerEnd} </p>
                                {
                                    y.recipe.map((x, j) => {
                                        return <div key={j}>
                                            <h3 name="name" >{x.name}</h3>
                                            <p name="ingredients" >Sastojci: {x.ingredients}</p>
                                            <p name="preparationTime">Vrijeme pripreme: {x.preparationTime}</p>
                                            <Button onClick={() => this.order(y.specialOffers[0]? y.specialOffers[0].discount : null, y.price, x.name) }>NARUČI</Button>
                                        </div>
                                    })
                                }
                            <hr/></div> 
                        })}
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}