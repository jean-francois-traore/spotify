import React from 'react';
import '../styles/Pagination.css';

function paginations({albumsPerPage, totalAlbums, setCurrentPage, currentPage}) {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalAlbums / albumsPerPage); i++){
        pageNumbers.push(i)
    }
    const handleClick = (e)=>{
        setCurrentPage(Number(e.target.id));
    }
    return (
        <div>
            <ul className='pageNumbers'>
                {
                    pageNumbers.map((number, index) => {
                        return <li
                        key={index}
                        onClick={handleClick}
                        id={number}
                        className={currentPage == number ? "active" : null}
                        >
                            {number}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default paginations;
