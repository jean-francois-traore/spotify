import React, { useState, useEffect } from 'react'
import Paginations from './paginations';
import '../styles/Albums.css'
import {useHistory} from 'react-router-dom';

function Albums() {
    const [albums, setAlbums] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage, setAlbumsPerPage] = useState(30);
    let history = useHistory();
    useEffect(() => {
            if(!albums){
                fetch("http://127.0.0.1:5000/albums")
                    .then(res => res.json())
                    .then(res => setAlbums(res))
            }
    }, [albums]);
    if(!albums) return <div>Chargement...</div>
    // ces trois variable = on recupere le nombre d'element a afficher par cette calcul et on slice pour afficher entre ces nombre
    const indexOfLastAlbums = currentPage * albumsPerPage;
    const indexOfFirtsAlbums = indexOfLastAlbums - albumsPerPage;
    const currentAlbums = albums.slice(indexOfFirtsAlbums, indexOfLastAlbums);
    const handleId = (name) => {
        history.push(`/detail_album/${name}`);
        console.log(name);
    }
    return (
        <>
            <div className="albums-container">
                <div className='content-albums'>
                    {
                        currentAlbums.map((item, index) => {
                            return <div key={index} onClick={() => handleId(item.name)} className="content">
                                <img 
                                    src={item.cover}
                                    />
                                    <p className='title'>{item.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='paginations-albums'>
                <Paginations 
                albumsPerPage={albumsPerPage} 
                totalAlbums={albums.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                />
            </div>
        </>
    )
}

export default Albums;
