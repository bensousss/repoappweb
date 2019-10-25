import React from 'react';
import {Link} from 'react-router-dom';

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



    /*store (){
        var inputEmail= document.getElementById("email");
        localStorage.setItem("email", inputEmail.value);

        var inputfirstName= document.getElementById("firstName");
        localStorage.setItem("firstName", inputfirstName.value);

        var inputlastName= document.getElementById("lastName");
        localStorage.setItem("lastName", inputlastName.value);

        var inputpassword= document.getElementById("password");
        localStorage.setItem("password", inputpassword.value);
        
    }*/

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
                            <button type="submit" onClick={this.store}>Créer mon compte</button>
                        </div>

                    </form>
                </div>
                <button> <Link to={"/"}> Retour</Link></button>

            </div>
        )
        

    }
}