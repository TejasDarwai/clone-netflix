import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original"


function Row({title, fetchURL, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(()=>{

        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]); 
    console.log(movies);

    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
          autoplay: 1,
        }
      };

      const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        }else {
            movieTrailer(movie?.title || "")
            .then(url => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));

            }).catch((error) => console.log(error));
        }
      
      }


      

    return (
        <div className="row" >
            <h2>{title}</h2>
            
            <div className="row__posters">
                {movies.map(movie => (
                <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} onClick={()=>handleClick(movie)} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} />
            ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

export default Row
