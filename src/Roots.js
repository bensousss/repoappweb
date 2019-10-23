import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Welcome} from './WelcomePage';
import {ConnexionPage} from './ConnexionPage'; 
import {InscriptionPage} from './InscriptionPage';

export class Roots extends React.Component{

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/ConnexionPage" component ={ConnexionPage}/>
                    <Route path="/InscriptionPage" component ={InscriptionPage}/>
                </div>
            </Router>
        );
    }
}