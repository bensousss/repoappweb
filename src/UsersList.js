import React from 'react'; 
import {User} from './User';



export class UsersList extends React.Component{

    render(){
        console.log(this.props.users);
        return(
            <ul>
                
                {this.props.users.map((user)=> {
                    return <User user={user} key={user.id}/>
                })}
                    

                
            </ul>
        );
    }



}