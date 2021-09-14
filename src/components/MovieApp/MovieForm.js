import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addMovieName } from '../../action/addMovie'
const MovieForm = (props)=>{
    const [movieName,setMovieName] = useState('')
    const [ranking,setRanking] = useState('')

    const dispatch=useDispatch()

    const handleRankingChange = (e)=>{
        setRanking(e.target.value)
    }

    const handleNameChange = (e)=>{
        setMovieName(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const data ={
            id:Number(new Date()),
            movieName:movieName,
            ranking:ranking
        }
        //console.log(data)
        dispatch(addMovieName(data))
        setMovieName('')
        setRanking('')
    }
    return(
        <div>
            <h2>Add Movie</h2>
           <div class="p-3 mb-2 bg-light text-dark">
            <form onSubmit={handleSubmit}>
                <div class="mb-0">  
                    <input type='text' value={movieName} placeholder='Enter Movie Name' onChange={handleNameChange} className='form-control'/>
                </div>
                <br/>
                <div class="mb-0">
                <input type='Number' value={ranking} placeholder='IMDB Ranking' onChange={handleRankingChange} className='form-control'/>
                </div>
                <br/>
                <div class="mb-0">
                <input type='submit'class="btn btn-primary" value='Add'/>
                </div>
            </form>
            </div>
        </div>
    )
}

export default MovieForm