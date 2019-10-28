import React from 'react'; 
import {Cards} from './Cards';



export class CardsList extends React.Component{

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

        return(
            <div>
                <ul>
                
                    {this.props.users.map((user)=> {
                        return <Cards user={user} key={user.id}/>
                    })}
                    

                
                </ul>

                <input type ="text" value={this.state.search} onChange ={this.updateSearch.bind(this)}/> 

            </div>
            
        );
    }



}