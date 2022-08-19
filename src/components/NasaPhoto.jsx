import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_NASA_KEY_GHALI

export default function NasaPhoto() {
  const [photoData,setPhotoData] = useState(null);
 

   useEffect( () => {

    
    fetchPhoto();
    async function fetchPhoto() {
      
        const res = await fetch (
            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        const data = await res.json(); 
        setPhotoData(data);
        console.log(data);
    }
   },[]); 

   
   if(!photoData)
   
    return <div/> ; 
   


   return (
    <>
    <Navbar/>
    <div>
        {photoData.media_type === 'image'  ? ( 
        <img src = {photoData.url}
        alt={photoData.title}
        /> )
        : (<iframe
         title="space-videos"
         src={photoData.url}
         frameBorder="0"
         gesture="media"
         allow="encrypted-media"
         allowFullScreen
         className="photo"
        
        
        
        
        />)}
        <h1>{photoData.title}</h1>
        <h2>{photoData.explanation}</h2>

    </div>
    </>
   )
}

