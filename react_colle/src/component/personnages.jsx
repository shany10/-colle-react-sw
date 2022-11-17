import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Personnages = () => {

    // const location = useLocation();
    let navigate = useNavigate();
    const [personnages_display , setPersonnages_display] = useState(null);
    const [search_val , setSearch_val] = useState(null);

    const search= () => {
        if(search_val === "") {
            return;
        }
        
    }

    const inspect_personnage = (value) => {
        navigate("/personnage" , {state : { value: value }})
    }

    useEffect(() => {
        async function getResults() {
            const response = await axios('https://swapi.dev/api/people')
            const results = response.data.results;
            const personnage = results.map((list) => 

                <li key={list.name}>
                    <button onClick={(e) => inspect_personnage(e.target.value)} value={list.name}>{list.name}</button>
                </li>
        )
           
            setPersonnages_display(personnage)
        }
        getResults();
    }, [personnages_display])

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setSearch_val(e.target.value)} className='search'/><button onClick={() => search()}>search</button>
            </div>
            <ul>
                {personnages_display}
            </ul>
        </div>
    )
}

export default Personnages;

