import React, { useEffect } from 'react'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
function App() {


  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=naruto&limit=20`)
    const resData = await res.json();
    console.log(resData)
  }

  //this method takes two args first is function and sec is dependency
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <nav className="dark:bg-slate-800 navbar bg-gray-100 w-full top-0 left-0 z-[5] sm:py-0">
        <div className="nav-wrapper w-full mx-auto flex flex-row items-center justify-between max-w-[1280px]">
          <div className="max-w-8xl px-4 py-1 sm:px-6 lg:px-8 w-full mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <h3 className="md:block font-body font-semibold text-3xl text-sky-400 logo-text">
                MyAnime
              </h3>
              {/* </Link>
						{isAuth ? (
							<div
								className="search-form hidden sm:block relative"
								ref={searchListReference}
							> */}
              <form className='sm: pl-2.5'>
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
                    autoComplete="off"
                    // onChange={handleSearchTextChange}
                    className="focus:ring-sky-500 focus:border-sky-500 block w-full pl-8 bg-transparent pr-2 py-1.5 sm:text-base mr-1  text-slate-900 border-gray-300 rounded-sm outline-none"
                    placeholder="Search Animes..."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App