import React from 'react';
import {Link} from 'react-router-dom';

const buttonStyle={
    border:'none',
	padding:'6px, 0, 6px, 0',
	borderRadius:8,
	background:'green',
	font:'bold 25px Arial',
    color:'#fff',
    width:'33%',
    height:80,
    marginTop:20,
    marginLeft:'33%'
}

export class InscriptionButton extends React.Component{


    render(){

        return (
                <button> <Link to={"/InscriptionPage"}> Inscription</Link></button>

        )
    }

}