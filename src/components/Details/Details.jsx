import React, {useEffect, useState} from 'react';
import './Details.css';

export default function Details (props) {
    const {id} = props;
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    // console.log(id);

    useEffect(() => {
        if(typeof(id) === 'number') {
            try {
                fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
                    .then(response => response.json())
                    .then((result) => {
                        setUser(result);
                        setLoading(false);
                        console.log(result);
                    })
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
    }, [id]);

    return (
        <>
            {!isLoading ? <div className='user-details'>
                <div>
                    <img src={user.avatar} alt={user.name}/>
                </div>
                <div className='user-name'>{user.name}</div>
                <div>City: {user.details.city}</div>
                <div>Company: {user.details.company}</div>
                <div>Position: {user.details.position}</div>
            </div> : ''
            }
        </>
    )
}
