const API_KEY = 'a409319c72dda4d9ef3852399a8c54f4';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
1 - originais da netflix - 
2- recomendados (trending)
3 - em alta (top rated)
4- ação
5 - comédia
6- terror
7- romance
8 - documentários
 */

const basicFetch = async (endpoiint) =>{

    const req = await fetch(`${API_BASE}${endpoiint}`);
    const json = await req.json();
    return json;
}

export default {

    getHomeList: async () =>{
        return [
            {
                slug:'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv/?with_networks=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items: await basicFetch(`/movie/top_rated&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug:'comedy',
                title:'Comédia',
                items: `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
            },
            {
                slug:'horror',
                title:'Terror',
                items: `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
            },
            {
                slug:'romance',
                title:'Romance',
                items: `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
            },
            {
                slug:'documentary',
                title:'Documentários',
                items: `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
            },

           


        ];
    },

    getMovieInfo: async (movieId,type) =>{

        let info = {

            if(movieId){
                switch(type) {
                    case 'movie':
                        info = await basicFetch(`/movie/${movieId}?language-pt-BR&api_key=${API_KEY}`);
                        break;
                    
                    case 'tv':
                        info = await basicFetch(`/tv/${movieId}?language-pt-BR&api_key=${API_KEY}`);
                        break;
                    default:
                        info = null;
                        break;
                }

            }

        };

        return info;

    }

    
}

