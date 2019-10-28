import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

let cards=[];
var cardsList = localStorage.getItem('myCardList');

export class ProfilPage  extends React.Component {

    storeCard(e){
        e.preventDefault();
        let card ={
            id: Date.now(),
            last_4: document.getElementById('number').value,
            brand: document.getElementById('brand').value,
            date: document.getElementById('date').value,

        }
        cards.push(card);

        console.warn('added', {card});

        localStorage.setItem('myCardList', JSON.stringify(cards));


    }
    
    render () {
        return( 
            <div className="wrapper">
                <div className="form-wrapper">
                    <img src={logo} alt="logo"/>
                    <h1>Votre Profil</h1>
                    <div className="infosProfil">
                        <p>
                            <label htmlFor="name">Nom : </label>
                            <input
                                type="text"
                                className=""
                                placeholder="Nom"
                                name="name"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                        <label htmlFor="name">Prénom : </label>
                            <input
                                type="text"
                                className=""
                                placeholder="Prénom"
                                name="name"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                        <label htmlFor="mail">Adresse mail : </label>
                            <input
                                type="text"
                                className=""
                                placeholder="adresse@fournisseur.com/fr"
                                name="mail"
                                noValidate
                                onChange={this.handleChange}
                            />
                        </p>
                        <div className="cards">
                            <p>
                                Liste de vos cartes disponibles : {cardsList}
                            </p>
                            <div className="addCard">
                               <p> 
                                   <label htmlFor="addCard">Ajouter une carte de crédit (numéro) : </label><br/>
                                    <input
                                        id="number"
                                        type="number"
                                        className=""
                                        placeholder="XXXX"
                                        name="number"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        id="brand"
                                        type="text"
                                        className=""
                                        placeholder="Marque"
                                        name="brand"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        id="date"
                                        type="date"
                                        className=""
                                        placeholder="??/??/??"
                                        name="date"
                                        noValidate
                                        onChange={this.handleChange}
                                    /><br/>
                                    <button onClick={this.storeCard}>Ajouter</button>
                                </p>
                            </div>
                            <div className="deleteCard">
                                <p> 
                                    <label htmlFor="deleteCard">Supprimer une carte de crédit (numéro) : </label><br/>
                                    <input
                                        id="number"
                                        type="number"
                                        className=""
                                        placeholder="XXXX"
                                        name="number"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        id="brand"
                                        type="text"
                                        className=""
                                        placeholder="Marque"
                                        name="brand"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        id="date"
                                        type="date"
                                        className=""
                                        placeholder="??/??/??"
                                        name="date"
                                        noValidate
                                        onChange={this.handleChange}
                                    /><br/>
                                    <button>Supprimer</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>
                        <button><Link to={"/ProfilPage"}>Sauvegarder les changements</Link></button>
                    </p>
                    <p>
                        <button><Link to={"/Acceuil_logged"}>Retour</Link></button>
                    </p>
                </div>
            </div>
        )
    }
}