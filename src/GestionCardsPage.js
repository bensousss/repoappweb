import React from 'react'; 
import {CardsList} from './CardsList';



export class GestionCardsPage extends React.Component{

    render(){
        return(
            <div>
                <h1>Outils interne pour visualiser les différentes cartes de nos clients </h1>

                <CardsList users={this.props.users} /> 
            </div>
            
            



        );
    }
}