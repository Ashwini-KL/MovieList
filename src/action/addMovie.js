export const addMovieName = (value)=>{
    return{
        type:'ADD_MOVIENAME',
        payload:value
    }
}

export const removeMovie = (id)=>{
    return{
        type:'REMOVE_MOVIE',
        payload:id
    }
}