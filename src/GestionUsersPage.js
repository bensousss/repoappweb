import React from 'react'; 
import {UsersList} from './UsersList';



export class GestionUsersPage extends React.Component{

    render(){
        return(
            <div>
                <h1>Outils de gestion de notre base de donnée</h1>

                <UsersList users={this.props.users} /> 
            </div>
            
            



        );
    }
}