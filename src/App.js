import React, {useEffect , useState} from 'react';
import tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';


export default ()=>{

  const [movieList,setMovieList] = useState([]);
  const [FeatureData,setFeatureData] = useState([null]);
  const [blackHeadar,setBlackHeadar] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {

      //pegando lista total

      let list = await tmdb.getHomeList();
      setMovieList(list);

      //Pegando o Feature

      let originals = list.filter(i=>i.slug === 'originals');

      let randomChosen = Math.floor(Math.random() * originals[0].items.results.lenght - 1)

      let chosen = originals[0].item.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,`tv`);
      setFeaturedata(chosenInfo);
      

    }

    loadAll();
  },[]);
  return(

   

    <div className="page">

      <Header black={blackHeadar}/>

      {FeatureData && <FeatureMovie item = {FeatureData}/>}
     <section className="lists">
       {movieList.map((item,key) =>(
         
           <MovieRow key={key} title={item.title} item={item.items}/>
         
       ))}
    </section>

    <footer>
      <p>Página clone da Netflix criada para o desafio final do módulo 2 do curso carreira em desenvolvimento frontend Vai na Web</p>
      <p>Criada por Samantha Adeline Córdova da Silva</p>
    </footer>
    </div>

  );
}