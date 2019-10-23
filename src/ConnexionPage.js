import React from 'react';
import {Link} from 'react-router-dom';


export class ConnexionPage extends React.Component{

    

    render(){
        return (
            <div className="wrapper">
                <div className="form-wrapper">
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
                            <button type="submit">Connexion</button>
                        </div>

                    </form>


                </div>

                <button> <Link to={"/"}> Retour</Link></button>

            </div>
        )
        

    }
}