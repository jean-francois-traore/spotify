import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
function Detail_artists() {
    const [detailArtists, setDetailArtists] = useState(null);
    const [albumArtists, setAlbumArtists] = useState(null);
    let location = useLocation();
    let name = location.pathname.split("/")[2];
    useEffect(() => {
        if(!albumArtists){
            fetch("http://127.0.0.1:5000/albums/artists/" + name)
            .then(res => res.json())
            .then(res => setAlbumArtists(res))
        }
    }, [albumArtists])
    if(!albumArtists) return <div>Chargement...</div>
    return (
        <>
            <div className='Detail_content'>
                <div className='detail_artist'>
                    <div className='name_artists'>
                        <p className='nameArtists'>ARAFAT</p>
                    </div>
                </div>
            </div>
            <div className='artists_album-container'>
                <p>Sortie populaire</p>
                <div className='artists-album-content'>
                    {
                        albumArtists.map((albumArtist, index) => {
                            return <div key={index} className='artists-album'>
                            <div className="img-album-artists">
                                <img className="img-album-a" src={albumArtist.cover}/>
                            </div>
                            <div>
                                <p>{albumArtist.name}</p>
                                {/* <p>okdd;,,nsdc;s,dcnsdv</p> */}
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Detail_artists;
