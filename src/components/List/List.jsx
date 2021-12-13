import React from 'react';
import './List.css';
import ListItem from "../ListItem/ListItem";

export default function List (props) {
    const {users, viewDetails} = props;

    return (
        <ul className='users-list'>
            {users.map(o => <ListItem key={o.id} viewDetails={viewDetails} id={o.id} name={o.name}/>)}
        </ul>
    )
}