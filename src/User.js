import React from 'react'; 



export class User extends React.Component{

    render(){
        console.log(this.props.users);
        return(
            <li style ={{textAlign:"left"}}>
                <br/>id : {this.props.user.id} <br/> firstName :  {this.props.user.firstName} <br/>lastName : {this.props.user.lastName} <br/> email : {this.props.user.email} <br/>password : {this.props.user.password} 
            </li>
        );
    }



}