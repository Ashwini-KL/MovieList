import React from 'react'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../../action/addMovie'
const MoviesList = (props)=>{

    const {listOfMovies} = props

    const dispatch = useDispatch()

    const handleRemove = (id)=>{
        dispatch(removeMovie(id))
    }

    return(
    <div style={{display:'inline',position:'absolute',float:'left',marginRight:'1%',marginBottom:'5px'}}>
            {
                listOfMovies.map((movie)=>{
                    return <div key={movie.id}>  
                        <div style={{marginTop:'5px'}}><img src="/images/placeholder-square.jpg" width='100px' height='100px'></img>
                        <div style={{display:'inline',border:'2px solid',width:'100px',position:'absolute'}}>
                                <span>{movie.movieName}</span> 
                                <p> #{movie.ranking}</p>  
                                <button className="bi bi-trash" onClick={()=>{handleRemove(movie.id)}}>Remove</button> 
                         </div>       
                        </div>
                        </div>
                          
                })
            }
         </div>)
}
export default MoviesList