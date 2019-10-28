import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Welcome} from './WelcomePage';
import {ConnexionPage} from './ConnexionPage'; 
import {InscriptionPage} from './InscriptionPage';
import { Acceuil_logged } from './Acceuil_logged';
import {GestionUsersPageWrapper} from './GestionUsersPageWrapper';
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
                    <Route path="/GestionUsersPage" component ={GestionUsersPageWrapper}/>
                    <Route path="/GestionWalletsPage" component ={GestionWalletsPageWrapper}/>
                    <Route path="/GestionCardsPage" component ={GestionCardsPageWrapper}/>
                </div>
            </Router>
        );
    }
}