import React,{useState} from 'react';
import MovieSearch from './MovieSearch';
import Display from './Display';
export default function Movie(){
    const [movie,setMovies] = useState([]);
    const Function1 = (title) => {
            const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=5b2af3d3&t=' + title;
                fetch(url)
                .then((res)=>{return res.json()})
                .then((data)=>{setMovies(data);}) 
    }
    return(
        <div className="container">
            <MovieSearch usersData={Function1}/>
        <div classname="row">
            {    
               <div className="col-md-4 offset-3">
                <Display poster={movie.Poster} title={movie.Title} actors={movie.Actors} director={movie.Director} genre={movie.Genre} runtime={movie.Runtime}/>
                </div>
            }
        </div>
        </div>
    )
}
