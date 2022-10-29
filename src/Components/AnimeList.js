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
                className="card shadow-lg rounded-lg"
                key={index}
                onClick={() => setAnimeInfo(anime)}
              >
                <img
                  src={anime.images.jpg.large_image_url}
                  className="anime-img rounded-t-lg"
                  alt="animeImage"
                />
                <p className='text-[12px] sm:text-[15px]'>{anime.title}</p>
              </div>
  
                  
                
            </>
          );
        })
      ): 'Sorry, Not Found'
    }
        
    </>
  )
}
