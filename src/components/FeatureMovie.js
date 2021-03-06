import { getSelectionRange } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './FeatureMovie.css';

export default (item) =>{

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){

        genres.push(item.genres[i].name);


    }

    return (
        <section className="feature" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="feature--vertical"> 
                <div className="feature--horizontal">
                    <div className="feature--name">
                        {item.original_name}
                    </div>
                    <div className="feature--info">
                        <div className="feature--points">{item.vote_average} pontos </div>
                        <div className="feature--year">{firstDate.getFullYear}</div>
                        <div className="feature--seasons">{item.number_of_season} temporada{item.number_of_seasons !==  1 ? 's' : ''}</div>
                        <div className="feature--description">{item.overview}</div>
                        <div className="feature--buttons">
                            <a href="#" className="feature--watchButton">Assistir </a>
                            <a href="#" className="feature--mylistButton">+ Minha Lista</a>
                        </div>
                        <div className="feature--genres"><strong>Gêneros</strong></div>{genres.join(", ")}</div>

                    </div>
                </div>
            


        </section>
    );
}