import React from 'react'; 
import {UsersList} from './UsersList';



export class GestionUsersPage extends React.Component{

    render(){
        return(
            <div>
                <h1>Outils interne pour visualiser notre base de donnée client </h1>

                <UsersList users={this.props.users} /> 
            </div>
            
            



        );
    }
}