import React, { Component } from 'react';
import Axios from 'axios';

import i18n from '../../i18n';
import './recipe.css';

export default class Recipe extends Component {
    state= {
        name: "", //ali u bazu ne spremamo ime, jer o imenu jela ne oblucuje onaj koji unosi recept
        ingredients: "",
        recipeText: "",
        preparationTime: 0,
    }

    handleInput =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postRecipe =(e) => {
        e.preventDefault()
        console.log(this.state)
        Axios.post("https://localhost:44342/recipes", {
            name: this.state.name,
            ingredients: this.state.ingredients,
            preparationTime: parseInt(this.state.preparationTime)
        })
        .then((resp)=> {
            console.log(resp);
            let name1 = resp.name;
            Axios.post("https://localhost:44342/upload", {
                Name: name1,
                ObjFile: this.state.recipeText
            }, {
                headers: { 
                    "Content-Type": 'multipart/form-data'
                }
            })
            .then(resp => {
                alert("Dodano");
            })
            alert("Dodano2");
        })
        .catch((e)=> console.log(e))
    }


    render(){
        return(
            <div>
                <div id="recipe-page-img"></div>
                <h1 id="recipe-page">{i18n.t('Recepti')}</h1>

                <p id="new-recipe">{i18n.t('Novi recept')}</p>

                {/*<div id="left">
                </div>*/}
                <div id="recipe-form">
                    <h3 id="share-recipe">{i18n.t('Podijelite recept')}</h3><hr/>

                    <form id="postRecipe" onSubmit={this.postRecipe}>
                        <div className="recipe-row">
                            <label className="recipe-label">{i18n.t('Naziv jela')}</label>
                            <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="recipe-input"/><br />
                        </div>
                        
                        <div className="recipe-row">
                            <label className="recipe-label">{i18n.t('Sastojci')}</label>
                            <textarea type="text" name="ingredients" onChange={this.handleInput} value={this.state.ingredients} className="recipe-input" id="recipe-textarea"/><br />
                        </div>
                        
                        <div className="recipe-row">
                            <label className="recipe-label">{i18n.t('Recept fajl')}</label>
                            <input type="file" name="recipeText" onChange={this.handleInput}  className="recipe-input"/>
                        </div>

                        <div className="recipe-row">
                            <label className="recipe-label">{i18n.t('Vrijeme pripreme')}</label>
                            <input type="int" name="preparationTime" onChange={this.handleInput} value={this.state.preparationTime} className="recipe-input"/><br />
                        </div>

                        <div id="share-btn-div" className="recipe-row">
                            <button id="recipe-btn">{i18n.t('Podijeli')}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}