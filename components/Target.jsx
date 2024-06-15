import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hook/useGif';

const Target = () => {
    // const [gif, setGif] = useState('');
    const [tag, setTag] = useState('cute cat');
    // const [loading, setLoading] = useState(false);

    // const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';
    


    // async function fetchGif(value = 'cute cat'){
    //     try{
    //         setLoading(true);
    //         let {data} = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${value}`);
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
    const {gif, loading, fetchGif} = useGif(tag);

    function clickHandler(){
        fetchGif(tag);
    }


  return (
    <div className="card1">
        <h1>RANDOM {tag} GIF</h1>

        <div className="gif">
            {
                loading ?
                (<Spinner/>) : (<img src={gif}/>)
            }
        </div>

        <input type="text" onChange = {(e) => { setTag(e.target.value)}}/>
        <button className="btn" onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Target