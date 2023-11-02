import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
 
const CardList = () => { 
  const [Photos, setPhotos] = useState(null); 
 
  useEffect = 
   
    (() => { 
      axios 
        .get("https://api.unsplash.com/search/photos?query=car", { 
          // params:{query : 'car'}, 
          headers: { 
            Authorization: 
'Client-ID MJB59FE8cICGSj8oLtDyavDAsnWNm9uXLBXe-1Oa6_w'          }, 
        }) 
        .then((Response) => { 
          // console.log(Response.data.result); 
          setPhotos(Response.data.result); 
         
        }); 
    }, 
    []); 
 
        console.log(Photos); 
 
        const ImagesList = Photos.map(obj=>{ 
          return( 
            <Card/> 
          ) 
 
        }) 
  
 
 
 
  return ( 
    <div> 
       
    </div> 
  ); 
}; 
 
export default Search;
