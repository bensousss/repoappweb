import React from 'react'; 
import { WelcomeHeader } from './WelcomeHeader';
import { ConnexionButton } from './ConnexionButton';
import { InscriptionButton } from './InscriptionButton';

export class Welcome extends React.Component{


    render(){
        return (
            <div>
               
                <WelcomeHeader/><br/>
                <ConnexionButton/><br/><br/>
                <InscriptionButton/>
               
            </div>
        );
    }
}