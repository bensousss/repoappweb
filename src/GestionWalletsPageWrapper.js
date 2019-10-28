import React from 'react'; 
import {GestionWalletsPage} from './GestionWalletsPage';


let users = [
    {
        id:0,
        id_user:0,
        balance:1000,
    },
    {
        id:1,
        id_user:1,
        balance:2000,
    },
    {
        id:2,
        id_user:2,
        balance:3000,
    }


]


export class GestionWalletsPageWrapper extends React.Component{

    render(){
        return(
            
            <GestionWalletsPage users={users}/>

        );
    }
}