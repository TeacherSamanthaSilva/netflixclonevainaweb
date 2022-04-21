import React from 'react';
import './MovieRow.css';

export default (title,items) => {
    return(
        <div className="MovieRow">
            <h2>{title}</h2>
            <div className="MovieRow--listarea">
                <div className="MovieRow--list">

                {items.results.lenght > 0 && items.results.map((item,key) => (

                    <div key={key} className="MovieRow--item">
                        <img src = {`https://image.tmdb.org/t/p/w300${item.poster_path}`} ></img>
                        </div>

))}
                    </div>
                
                </div>
        </div>
    );
}