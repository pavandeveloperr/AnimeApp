import React, { useEffect, useState } from "react"
 function App() {
   
  //creating a state variable to hold response 
  //(setAnimeData is used for updating the state & animeData is initial state )
  const [animeData, setAnimeData] = useState()
  const getData = async() => {
  const res=await fetch(`https://api.jikan.moe/v4/anime?q=naruto&limit=20`)
  const resData = await res.json();
  setAnimeData(resData.data)
 }

 useEffect(() => {
  getData()
 }, [])

 return (
  <>
    <div className="header">
      <h1>MyAnimeList</h1>
      <div className="search-box">
        <input type="search" placeholder="Search your anime"/>
      </div>
    </div>
  
  </>
 )
 }
 export default App;
