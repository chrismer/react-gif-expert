import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, serImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async()=>{
      const newImages = await getGifs(category);
      serImages(newImages);
      setIsLoading(false)
    }
    
    useEffect( () => {
        
        getImages();
  
    },[])  

  return {
      images,
      isLoading
  }
  
}


