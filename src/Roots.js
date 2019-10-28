import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Welcome} from './WelcomePage';
import {ConnexionPage} from './ConnexionPage'; 
import {InscriptionPage} from './InscriptionPage';
import {Acceuil_logged} from './Acceuil_logged';
import {ProfilPage} from './ProfilPage';
import {Dépôt} from './Dépôt';
import {Retrait} from './Retrait';
import {Transfert} from './Transfert';
import {GestionWalletsPageWrapper} from './GestionWalletsPageWrapper';
import {GestionCardsPageWrapper} from './GestionCardsPageWrapper';


export class Roots extends React.Component{

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/ConnexionPage" component ={ConnexionPage}/>
                    <Route path="/InscriptionPage" component ={InscriptionPage}/>
                    <Route path="/Acceuil_logged" component ={Acceuil_logged}/>
                    <Route path="/ProfilPage" component ={ProfilPage} />
                    <Route path ="/Transfert" component ={Transfert} />
                    <Route path ="/Dépôt" component ={Dépôt} />
                    <Route path ="/Retrait" component ={Retrait}/>
                    <Route path="/GestionWalletsPage" component ={GestionWalletsPageWrapper}/>
                    <Route path="/GestionCardsPage" component ={GestionCardsPageWrapper}/>
                </div>
            </Router>
        );
    }
}