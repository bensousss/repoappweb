import React from 'react'; 



export class Wallet extends React.Component{

    render(){
        console.log(this.props.users);
        return(
            <li style ={{textAlign:"left"}}>
                <br/>id : {this.props.user.id} <br/>id_user : {this.props.user.id_user} <br/>balance : {this.props.user.balance}
            </li>
        );
    }



}