import React from 'react'; 



export class Cards extends React.Component{

    render(){
        console.log(this.props.users);
        return(
            <li style ={{textAlign:"left"}}>
                <br/>id_card : {this.props.user.id_card} <br/>id_user : {this.props.user.id_user} <br/>last_4 : {this.props.user.last_4} <br/> brand : {this.props.user.brand} <br/> expired_at : {this.props.user.expired_at}
            </li>
        );
    }



}