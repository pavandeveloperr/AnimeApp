import React from 'react'
import '../index.css'
import './style.css'

export const AnimeList = ({animelist, setAnimeInfo}) => {
  return (
    <>
    {/* Here we are checking the anime data is present or not */}
    {/* here anime passed as an argument represents each element in the index */}
    {/* we have used map method to iterate over each element */}

    {
      animelist ? (
        animelist.map((anime, index)=>{
          return (
            <>
              <div
                className="card shadow-lg flex flex-col w-[270px] gap-4 mt-4 m-auto p-auto
                p-3 bg-[#707ea9] bg-opacity-20
                backdrop-blur-lg animate-slideup rounded-lg cursor-pointer font-semibold" 
              >
                <img
                  src={anime.images.jpg.large_image_url}
                  className="anime-img w-[290px] h-[320px] rounded-lg"
                  alt="animeImage"
                />
                <p className='lg:text-[15px] md:text-[15px] sm:text-[15px] truncate text-green-500'>{anime.title}</p>
              </div>                 
                
            </>
          );
        })
      ): 'Sorry, Not Found'
    }
        
    </>
  )
}
