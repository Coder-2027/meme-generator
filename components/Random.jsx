import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Spinner from './Spinner.jsx'
import useGif from '../hook/useGif';

const Random = () => {
    // const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchGif(){
    //     try{
    //         setLoading(true);
    //         let {data} = await axios.get(url);
    //         setGif(data.data.images.downsized_large.url);
    //         setLoading(false);
    //     }
    //     catch(e){
    //         console.log(e);;
    //     }
    // }

    // useEffect(() => {
    //     fetchGif()
    // }, [])

    const {gif, loading, fetchGif} = useGif();

  return (
    <div className="card1">
      <h1> RANDOM GIFS</h1>

      <div className="gif">
        {loading ? 
        (<Spinner/>) 
        :
        (<img src={gif}></img>)
        }
      </div>

      <button className="btn" onClick={() => fetchGif()}>Generate</button>
    </div>
  );
};

export default Random;
