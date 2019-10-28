import React from 'react'; 
import {User} from './User';



export class UsersList extends React.Component{

    constructor (props){
        super(props);
        this.state={
            search : '',
            users: props.users
        }
    }

    updateSearch(event){
        this.setState({search:event.target.value})
        
    }

    render(){
        
        let filteredUsers = this.state.users.filter(
            (user)=>{
                return user.email.indexOf(this.state.search)!== -1;
            }
        ) 

        return(
            <div>
                <ul>
                
                    {filteredUsers.map((user)=> {
                        return <User user={user} key={user.id}/>
                    })}
                    

                
                </ul>

                <input type ="text" value={this.state.search} onChange ={this.updateSearch.bind(this)}/> 

            </div>
            
        );
    }



}