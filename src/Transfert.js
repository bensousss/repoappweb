import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import logo from './logo.png';

export class Transfert extends React.Component {
    
    state =  {
        text: 'en attente'
    }

    onClickButton = () => {
        this.setState({
          text: 'effectuée'
        });
    }

    render () {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <img src={logo} alt="logo"/>
                    <h1>Transférer de l'argent vers un autre utilisateur</h1>
                    <p>
                        <label htmlFor="mail">Mail du destinataire : </label>
                        <input
                            type="text"
                            className=""
                            placeholder="adresse@fournisseur.com/fr"
                            name="mail"
                            noValidate
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="amount">Montant : </label>
                        <input
                            type="number"
                            className=""
                            placeholder=""
                            name="amount"
                            noValidate
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <button type="submit" onClick={this.onClickButton}>Effectuer le transfert</button>
                    </p>
                    <p>
                        <button><Link to={"/Acceuil_logged"}>Retour</Link></button>
                    </p>
                    <p>
                        Etat de la transaction : <div className="App-bold">{this.state.text}</div>
                    </p>
                </div>
            </div>
        )
    }    
}