import React from 'react';
import logo from './logo.png';

export const WelcomeHeader = () =>{
    return (
        <div className="header">
            <img src={logo} alt="logo"/>
            <h1 style ={{textAlign:'center',marginTop:50}}> BIENVENUE DANS NOTRE APPLICATION DE PAIEMENT : WATERMELON</h1>
        </div>
    )
}