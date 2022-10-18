import React, { useEffect, useState } from "react"
import './Components/style.css' 
import {AnimeList} from './Components/AnimeList'
import {AnimeInfo} from './Components/AnimeInfo'

function App() {
   
  const [search, setSearch] = useState('Demon Slayer')
  //creating a state variable to hold response 
  //(setAnimeData is used for updating the state & animeData is our initial state )
  const [animeData, setAnimeData] = useState()
  const [animeInfo, setAnimeInfo] = useState()
  const getData = async() => {
  const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
  const resData = await res.json();
  setAnimeData(resData.data)
 }

 //this method will run when the component will render 
 //it takes two arguments first is function & second is dependency
 useEffect(() => {
  getData()
 }, [search] )

 return (
  <>
    <div className="header">
      <h1>MyAnimeList</h1>
    
    <div className="search-box">
       <input type="search" placeholder="Search your anime" onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    </div>

    <div className="container">
      <div className="animeInfo">
       {animeInfo && <AnimeInfo/>} 

      </div>
      
      
      <div className="anime-row">
        <h2 className="text-heading">Anime</h2>
        
        <div className="row">
        <AnimeList 
        animelist={animeData}
        setAnimeInfo={setAnimeInfo}
        />
        </div>
      </div>
    </div>


  </>
 )
 }
 export default App;
