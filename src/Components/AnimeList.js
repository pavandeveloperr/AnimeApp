import React from 'react'

export const AnimeList = ({animelist}) => {
  return (
    <>
    {/* Here we are checking the anime data is present or not */}'
    {/* here anime passed as an argument represents each element in the index */}
    {/* we have used map method to iterate over each element */}

    {
      animelist ? (
        animelist.map((anime, index)=>{
          return(
            <div className='card'>
            <img src={anime.images.jpg.large_image_url} alt="animeImage"/>            <div className="anime-info">
              <h4>{anime.title}</h4>
            </div>
            </div>
          )
        })
      ):"Not Found"
    }
        
    </>
  )
}
