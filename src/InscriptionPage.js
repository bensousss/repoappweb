import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';

let users = [];

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

    state =  {
        text: ' '
    }

    onClickButton = () => {
        this.setState({
          text: 'Erreur inscription : adresse mail déjà utilisée'
        });
    }

    storeUser(e){
        e.preventDefault();
        let user ={
            id: Date.now(),
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value

        }
        users.push(user);

        console.warn('added', {user});

        localStorage.setItem('myUserList', JSON.stringify(users));
    }

    compareUser(e){
        e.preventDefault();
        var comp = JSON.parse(localStorage.getItem('myUserList'))
        console.log(comp);
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
                                id="firstName"
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
                                id="lastName"
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
                                id="email"
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
                                id="password"
                                type="text"
                                className=""
                                placeholder="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                                />
                        </div>

                        <div className="createAccount">
                        <button id="btn" onClick={this.storeUser}> <Link to={"/Acceuil_logged"}>Créer mon compte</Link></button>
                        <button onClick={this.compareUser}>test</button>
                        </div>

                    </form>
                </div>
                <button> <Link to={"/"}> Retour</Link></button>
                <p>
                    <div className="App-bold">{this.state.text}</div>
                </p>
            </div>
        )
        

    }
}