import React from 'react'; 
import {GestionUsersPage} from './GestionUsersPage';


let users = [
    {
        id:0,
        firstName:'Bob',
        lastName:'Dylan',
        email:'10lan@gmail.com',
        password:'10lan',
        is_admin:true
    },
    {
        id:1,
        firstName:'Michael',
        lastName:'Jackson',
        email:'KOP@gmail.com',
        password:'Smoothcriminal',
        is_admin:true
    },
    {
        id:2,
        firstName:'Paul',
        lastName:'Mccartney',
        email:'beatles@gmail.com',
        password:'beatlessurvivor',
        is_admin:true
    }


]


export class GestionUsersPageWrapper extends React.Component{

    render(){
        return(
            
            <GestionUsersPage users={users}/>

        );
    }
}