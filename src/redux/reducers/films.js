const initialState ={
    films:[],
    loading:false,
    error:null
}

export default function films(state=initialState,action) {
    console.log('reducer',action,state)
    const {type} = action
    switch(type) {
        case "GET_FILMS_REQUESTED":
            return {
                ...state,
                loading:true
            }
        case "GET_FILMS_SUCCESS":
            return {
                ...state,
                loading:false,
                films:action.films
            }
        case "GET_FILMS_FAILED":
            return {
                ...state,
                loading:false,
                error:action.message
            }
        default :
            return state
    }
}