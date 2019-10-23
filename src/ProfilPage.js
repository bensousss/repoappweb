import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

export class ProfilPage  extends React.Component {

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
                                Liste de vos cartes disponibles :
                            </p>
                            <div className="addCard">
                               <p> 
                                   <label htmlFor="addCard">Ajouter une carte de crédit (numéro) : </label>
                                    <input
                                       type="text"
                                       className=""
                                       placeholder="XXXX-XXXX-XXXX-XXXX"
                                        name="addCard"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
                                </p>
                            </div>
                            <div className="deleteCard">
                                <p> 
                                    <label htmlFor="deleteCard">Supprimer une carte de crédit (numéro) : </label>
                                    <input
                                        type="text"
                                        className=""
                                        placeholder="XXXX-XXXX-XXXX-XXXX"
                                        name="deleteCard"
                                        noValidate
                                        onChange={this.handleChange}
                                    />
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