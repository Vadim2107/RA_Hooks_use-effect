import './App.css';
import List from "./components/List/List";
import React, {useEffect, useState} from "react";
import Details from "./components/Details/Details";

export default function App() {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        try {
            fetch(process.env.REACT_APP_USERS_URL)
                .then(response => response.json())
                .then((users) => {
                    setLoading(false);
                    setUsers(users)
                })
        } catch (e) {
            console.error(e);
        }
    }, []);

    const viewDetails = (id) => {
        setId(id);
    }


    return (
        <div className="App">
            {isLoading ? <div>Loading...</div> : <List users={users} viewDetails={viewDetails}/>}
        <Details id={id}/>
        </div>
    );
}

// export default App;
