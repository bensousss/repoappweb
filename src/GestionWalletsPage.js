import React from 'react'; 
import {WalletsList} from './WalletsList';



export class GestionWalletsPage extends React.Component{

    render(){
        return(
            <div>
                <h1>Outils interne pour visualiser les différents comptes de nos clients </h1>

                <WalletsList users={this.props.users} /> 
            </div>
            
            



        );
    }
}