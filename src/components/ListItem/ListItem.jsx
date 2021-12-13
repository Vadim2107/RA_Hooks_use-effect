import React from 'react';

export default function ListItem ({viewDetails, id, name}) {
    return (
        <li onClick={() => viewDetails(id)}>{name}</li>
    )
}