const movieInitialState = []
const movieReducer = (state=movieInitialState,action)=>{
switch(action.type)
{
case 'ADD_MOVIENAME':
{
    return [...state,{...action.payload}]   
}
case 'REMOVE_MOVIE':
{
    return state.filter((ele)=>{
        return ele.id != action.payload
    })   
}
default:{
        return [...state]
    }
}
}
export default movieReducer