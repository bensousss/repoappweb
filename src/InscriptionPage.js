import React from 'react';
import {Link} from 'react-router-dom';

let users=[];

export class InscriptionPage extends React.Component{

    constructor(props){
        super(props);

        this.state={
            search : ''
        }
    }

    updateSearch(event){
        this.setState({search:event.target.value})
        
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
        document.forms[0].reset();

        console.warn('added', {user});

        localStorage.setItem('myUserList', JSON.stringify(users));


    }



    render(){
        return (
            <div className="wrapper">
                <div className="form-wrapper">
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
                                value = {this.state.search}
                                onChange={this.updateSearch.bind(this)}
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
                            <button id="btn" onClick={this.storeUser}>Créer mon compte</button>
                        </div>

                    </form>
                </div>
                <button> <Link to={"/"}> Retour</Link></button>

            </div>
        )
        

    }
}