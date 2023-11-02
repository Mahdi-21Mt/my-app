import React, { useState, useEffect} from "react";
import Navbar from "./Navbar/Navbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import BackDrop from "./BackDrop.js/BackDrop";
import Search from "./Search";
import axios from "axios";
const App = () => {

    const SearchPhotosSubmit=()=>{
axios.get('https://api.unsplash.com/search/photos',{
params:{query:'car'},
headers:{

  Authorization:    'Client-ID MJB59FE8cICGSj8oLtDyavDAsnWNm9uXLBXe-1Oa6_w'
}

}).then(Response=>{
    console.log(Response.data.results)
})

    }





  const [isOpen, setisopen] = useState(false);

  const OpenHandler = () => {
    setisopen(true);
  };
  const CloseHandler = () => {
    setisopen(false);
  };

const BackDropHandler=()=>{
    if(isOpen==true)
    return(
<BackDrop  CloseHandler={CloseHandler}/>


)
}




  return (
    <div>
      <Navbar OpenHandler={OpenHandler} />
      <SideDrawer ISOpen={isOpen} />
      {BackDropHandler()}  
      <div style={{ margin: "200px" }}></div>
      <button onClick={SearchPhotosSubmit}> Test </button>
    </div>
  );
};
export default App;
