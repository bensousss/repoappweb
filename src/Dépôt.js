import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import logo from './logo.png';

export class Dépôt extends React.Component {
    
    state =  {
        text: 'en attente'
    }

    onClickButton = () => {
        this.setState({
          text: 'effectué'
        });
    }

    render () {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <img src={logo} alt="logo"/>
                    <h1>Faire un dépôt d'argent sur Watermelon</h1>
                    <p>
                        Liste de vos cartes disponibles :
                    </p>
                    <div className="numCard">
                        <p> 
                           <label htmlFor="numCard">Séléctionnez une carte de crédit (numéro) : </label>
                            <input
                                type="text"
                                className=""
                                placeholder="XXXX-XXXX-XXXX-XXXX"
                                name="numCard"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </p>
                    </div>
                    <div className="amount">
                        <p> 
                           <label htmlFor="mamount">Montant à créditer sur votre compte Watermelon : </label>
                            <input
                                type="number"
                                className=""
                                placeholder=""
                                name="amount"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </p>
                    </div>
                    <p>
                        <button type="submit" onClick={this.onClickButton}>Effectuer le dépôt</button>
                    </p>
                    <p>
                        <button><Link to={"/Acceuil_logged"}>Retour</Link></button>
                    </p>
                    <p>
                        Etat du dépôt : <div className="App-bold">{this.state.text}</div>
                    </p>
                </div>
            </div>
        )
    }    
}