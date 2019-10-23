import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

export class Acceuil_logged  extends React.Component {

    render () {
        return( 
            <div className="wrapper">
                <div className="form-wrapper">
                    <img src={logo} alt="logo"/>
                    <h1>Bienvenue sur Watermelon</h1>
                    <p>Que souhaitez-vous faire ?</p>
                    <p>Solde : XXXX€</p>
                </div>
                <div className="checkProfil">
                    <button><Link to={"/ProfilPage"}>Profil</Link></button>
                </div>
                <div className="faireDepot">
                    <button type="submit">Dépôt</button>
                </div>
                <div classNam="faireRetrait">
                    <button type="submit">Retrait</button>
                </div>
                <div className="faireTransfert">
                <button><Link to={"/Transfert"}>Transfert</Link></button>
                </div>
            </div>
        )
    }

}