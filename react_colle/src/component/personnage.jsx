import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";

const Personnage = () => {
    const location = useLocation();
    const [personnages_display, setPersonnages_display] = useState(null);

    useEffect(() => {
        async function getResults() {

            const response = await axios('https://swapi.dev/api/people')
            const results = response.data.results;
            for(let i = 0  ; i < results.length ; i++) {
                if(results[i].name === location.state.value) {
                    setPersonnages_display(<div>
                                                <p>
                                                   name: {results[i].name}
                                                </p>
                                                <p>
                                                  eye_color:  {results[i].eye_color}
                                                </p>
                                                <p>
                                                  birth_year:  {results[i].birth_year}
                                                </p>
                                                <p>
                                                  gender : {results[i].gender}
                                                </p>
                                            </div>)
                }
            }
            
            // console.log(personnage)
        }
        getResults();
    }, [personnages_display])

    // const personnage = location.state.personnages.map((list) => {
    //     
    // } 
    // )

    return (
        <div>
            <ul>
                {personnages_display}
            </ul>
        </div>
    )
}

export default Personnage;