import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

export class InscriptionPage extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            firstName: null,
            lastName: null,
            email:null,
            password:null,
            formErrors:{
                firstName:"",
                lastName:"",
                email:"",
                password:""
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    render(){
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <img src={logo} alt="logo"/>
                    <h1>Création de votre compte</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">Prénom</label>
                            <input
                                type="text"
                                className=""
                                placeholder="First Name"
                                name="firstName"
                                noValidate
                                onChange={this.handleChange}
                                />
                        </div>

                        <div className="lastName">
                            <label htmlFor="lastName">Nom</label>
                            <input
                                type="text"
                                className=""
                                placeholder="Last Name"
                                name="lastName"
                                noValidate
                                onChange={this.handleChange}
                                />
                        </div>

                        <div className="email">
                            <label htmlFor="email">e-mail</label>
                            <input
                                type="text"
                                className=""
                                placeholder="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                                />
                        </div>

                        <div className="password">
                            <label htmlFor="password">mot de passe</label>
                            <input
                                type="text"
                                className=""
                                placeholder="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                                />
                        </div>

                        <div className="createAccount">
                        <button> <Link to={"/Acceuil_logged"}>Créer mon compte</Link></button>
                        </div>

                    </form>
                </div>
                <button> <Link to={"/"}> Retour</Link></button>
            </div>
        )
        

    }
}