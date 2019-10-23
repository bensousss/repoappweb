import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Welcome} from './WelcomePage';
import {ConnexionPage} from './ConnexionPage'; 
import {InscriptionPage} from './InscriptionPage';
import { Acceuil_logged } from './Acceuil_logged';

export class Roots extends React.Component{

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/ConnexionPage" component ={ConnexionPage}/>
                    <Route path="/InscriptionPage" component ={InscriptionPage}/>
                    <Route path="/Acceuil_logged" component ={Acceuil_logged}/>
                </div>
            </Router>
        );
    }
}