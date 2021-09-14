import React from 'react'
import { useSelector } from 'react-redux'

const MovieState = (props)=>{

    const movies = useSelector((state)=>{
                    return state.movies
    })

    let ranking
    if(movies.length>0) 
    {
        ranking = movies.reduce((a,b)=>{
            //console.log('red',a,b)
        return a.ranking<b.ranking?a:b
    })
   }
   //console.log('rank',ranking)
    
    
    // let rank = Math.min(...ranking)

    // let highestRank = movies.find((ele)=>{
    //     return ele.ranking == rank
    // })
    
    
    return(
        <div>
            <h2>Movie state</h2>
            TotalMovies - {movies.length}  
            {
                movies.length>0 && <p> #{ranking.movieName}</p>
            }
           
        </div>
    )
}
export default MovieState