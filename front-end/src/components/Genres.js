import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Genre.css';

function Genres() {
    const [genres, SetGenre] = useState(null);
    let history = useHistory();
    useEffect(() => {
        if(!genres){
            fetch("http://127.0.0.1:5000/genres")
                .then(res => res.json())
                .then(res => SetGenre(res))
            }
    }, [genres])
    const handleRedirection = (name) => {
        history.push('/detail_genre/' + name);
    }
    if(!genres) return <div>Chargement...</div>
    return (
        <div className='genre-container'>
            {
                genres.map((genre, index) => {
                    return <div key={index} onClick={() => handleRedirection(genre.name)} className='genre-content'>
                        <div className='genre-name'>
                            <h1>{genre.name}</h1>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Genres;
