import React from 'react'; 
import {GestionCardsPage} from './GestionCardsPage';


let users = [
    {
        id_card:0,
        id_user:0,
        last_4:1111,
        brand:'VISA',
        expired_at:"2021-01-01",
    },
    {
        id_card:1,
        id_user:1,
        last_4:2222,
        brand:'Master Card',
        expired_at:"2022-08-01",
    },
    {
        id_card:2,
        id_user:2,
        last_4:3333,
        brand:'American Express',
        expired_at:"2022-05-00",
    }


]


export class GestionCardsPageWrapper extends React.Component{

    render(){
        return(
            
            <GestionCardsPage users={users}/>

        );
    }
}