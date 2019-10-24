import React from 'react'; 



export class User extends React.Component{

    render(){
        console.log(this.props.users);
        return(
            <li>
                {this.props.user.id} {this.props.user.firstName} {this.props.user.lastName} {this.props.user.email} {this.props.user.password} 
            </li>
        );
    }



}