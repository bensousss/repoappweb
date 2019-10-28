import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';


export class ConnexionPage extends React.Component{

    state =  {
        text: ' '
    }

    onClickButton = () => {
        this.setState({
          text: 'Erreur de connexion : vérifiez votre e-mail ou votre mot de pass'
        });
    }

    render(){
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <img src={logo} alt="logo"/>
                    <h1>Connexion à votre espace membre</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        
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

                        <div className="conexion">
                        <button><Link to={"/Acceuil_logged"}> Connexion</Link></button>
                        </div>

                    </form>


                </div>

                <button><Link to={"/"}> Retour</Link></button>

                <p>
                    <div className="App-bold">{this.state.text}</div>
                </p>

            </div>
        )
        

    }
}