import React,{useEffect, useState} from 'react'
import MovieForm from './MovieForm'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import MovieState from './MovieState'


const MoviesContainer = (props)=>{

    const movies=useSelector((state)=>{
        return state.movies
    })
    
    const [search,setSearch] = useState('')
    const [listOfMovies,setListOfMovies] = useState(movies)
     
    useEffect(()=>{
      setListOfMovies(movies)
    },[movies])

    const handleSearchChange = (e)=>{
        const searchValue = e.target.value
        setSearch(searchValue)

        let searchMovies = movies.filter((movie)=>{
            if(movie.movieName.includes(searchValue))
            {
                return movie
            }   
        })
        //console.log('s',searchMovies)
        setListOfMovies(searchMovies)
    }

    const sorting = (value)=>{

        var m = [...movies]
        if(value =='A-Z')
        {
           for(let i = 0; i<m.length; i++)
                {
                    for(let j=i+1; j<m.length; j++)
                    {
                        if(m[i].movieName[0].charCodeAt(0) > m[j].movieName[0].charCodeAt(0)){
                            let temp = m[i]
                            m[i] = m[j]
                            m[j] = temp
                        }
                    }
                }      
        }
        else if(value=='Z-A')
        {
            for(let i=0;i<m.length;i++)
            {
                for(let j=i+1;j<m.length;j++)
                {
                    if(m[i].movieName[0].charCodeAt(0) < m[j].movieName[0].charCodeAt(0))
                    {
                        let temp=m[i]
                        m[i]=m[j]
                        m[j]=temp
                    }
                }
            }
          //  console.log('dec',movies)      
        }
        else if(value=='imdbinc')
        {
            for(let i=0;i<m.length;i++)
            {
                for(let j=i+1;j<m.length;j++)
                {
                    if(m[i].ranking > m[j].ranking)
                    {
                        console.log('v',m[i],m[j])
                        let temp=m[i]
                        m[i]=m[j]
                        m[j]=temp
                    }
                }
            }
            console.log('m',m)
        }
        else if(value=='imdbdec')
        {
            for(let i=0;i<m.length;i++)
            {
                for(let j=i+1;j<m.length;j++)
                {
                    if(m[i].ranking < m[j].ranking)
                    {
                        console.log('v',m[i],m[j])
                        let temp=m[i]
                        m[i]=m[j]
                        m[j]=temp
                    }
                }
            }
        }
        //console.log(movies)
        return m
                 
    }

    const handleSortChange = (e)=>{
        const value=e.target.value
        const newValue = sorting(value)
        //console.log(movies)
        setListOfMovies(newValue)
    }
     
    return(
        <div className='row'>
            <div className='col-md-9'>
                <div className='input-group w-50' >
                <input type='text' className='form-control'value={search} placeholder='search' onChange={handleSearchChange} />
                <select class="form-select"onChange={handleSortChange}>
                    <option>orderBy</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                    <option value='imdbinc'>imdb increasing</option>
                    <option value='imdbdec'>imdb decreasing</option>
                </select>
                </div>
                <MoviesList  listOfMovies={listOfMovies} />
            </div>
            <div className='col-md-3'>
                <MovieForm/>
                <MovieState/>
            </div>
        </div>
        
    )
}
export default MoviesContainer