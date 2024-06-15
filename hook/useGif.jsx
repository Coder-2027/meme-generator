import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';

const useGif = (tag) => {
    const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchGif(tag){
        setLoading(true);
        try{
            let {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
            setGif(data.data.images.downsized_large.url);
        }
        catch(e){
            console.log(e);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchGif(tag)
    }, [])


  return {gif, loading, fetchGif};
}

export default useGif;