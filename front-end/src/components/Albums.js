import React, { useState, useEffect } from 'react'
import Paginations from './paginations';

function Albums() {
    const [albums, setAlbums] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage, setAlbumsPerPage] = useState(25);
    useEffect(() => {
            fetch("http://127.0.0.1:5000/albums")
                .then(res => res.json())
                .then(res => setAlbums(res))
    }, []);
    if(!albums) return <div>Chargement...</div>
    const indexOfLastAlbums = currentPage * albumsPerPage;
    // console.log(indexOfLastAlbums);
    const indexOfFirtsAlbums = indexOfLastAlbums - albumsPerPage;
    // console.log(indexOfFirtsAlbums);
    const currentAlbums = albums.slice(indexOfFirtsAlbums, indexOfLastAlbums);
    // console.log(currentAlbums);    
    // console.log(albums);
    return (
        <>
            <div>
                {
                    currentAlbums.map((item, index) => {
                        return <div key={index}>
                            <p>{item.name}</p>
                        </div>
                    })
                }
                <div>
                    <Paginations 
                    albumsPerPage={albumsPerPage} 
                    totalAlbums={albums.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    />
                </div>
            </div>
        </>
    )
}

export default Albums;
