import React from 'react';
import {Link} from 'react-router-dom';



const buttonStyle={
    border:'none',
	padding:'6px, 0, 6px, 0',
	borderRadius:8,
	background:'blue',
	font:'bold 25px Arial',
    color:'#fff',
    width:'33%',
    height:80,
    marginTop:100,
    marginLeft:'33%'
}

export class ConnexionButton extends React.Component{


    render(){

        return (
                
                <button style={buttonStyle}><Link to={"/ConnexionPage"}>Connexion</Link></button> 
            
        )
    }

}