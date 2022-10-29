import React, { useEffect, useState } from 'react'
import './index.css'
import './Components/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { AnimeList } from './Components/AnimeList';


function App() {
  const [search, setSearch] = useState('Naruto')
  const [animeData, setAnimeData] = useState()
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json();
    setAnimeData(resData.data)
  }

  //this method takes two args first is function and sec is dependency
  useEffect(() => {
  getData()
  },[search])

  return (
    <>
      <nav className="dark:bg-slate-800 navbar bg-gray-100 w-full top-0 left-0 z-[5] sm:py-0">
        <div className="nav-wrapper w-full mx-auto flex flex-row items-center justify-between max-w-[1280px]">
          <div className="max-w-8xl px-4 py-1 sm:px-6 lg:px-8 w-full mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <h3 className="md:block font-body text-3xl logo-text">
                My<strong>Anime</strong>
              </h3>
              <form className="sm: pl-2.5">
                <div className="relative rounded-sm shadow-sm bg-gray-200">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400 sm:text-sm">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                  </div>
                  <input
                    type="search"
                    name="searchText"
                    id="searchTextDesktop"
                    required
                    // value={searchQueryText}
                    onChange={(e) => setSearch(e.target.value)}
                    className="shadow-sm focus-outlet-none focus:border-orange-600 focus:ring-black-500 focus:ring-2 invalid:bg-gray-200
                     sm:text-sm block w-full pl-8 pr-2 py-1.5 sm:text-sm mr-1 font-body border-gray-300 rounded-sm outline-none sm:items-center"
                    placeholder="Search your Anime.."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="contaier">
        <div className="animeInfo"></div>
        <div clasisName="anime-row">
          {/* <h2 className="text-heading">anime</h2> */}
          <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 p-4 text-red-500 text-center bg-gray-100">
            <AnimeList animelist={animeData} />
          </div>
        </div>
      </div>
      <footer class="bg-white-200 text-center text-black-400 lg:text-center">
        <div className='my-4'>
        <h3 className='footer-content'>Made with <i className="fas fa-heart" aria-hidden="true"></i> <a class="link" href="https://github.com/pavandeveloperr">
             Pavan Kulkarni </a></h3> 
          </div>      
      </footer>
    </>
  );
}

export default App
