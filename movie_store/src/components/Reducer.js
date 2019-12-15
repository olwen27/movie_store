

export const movieReducer = (state, action)=>{
     
    switch(action.type){
        case 'addMovie': 
        return [...state,
            {
            title: action.movies.title,
            author: action.movies.author,
            genre: action.movies.genre,
            rate: action.movies.rate,
            stock: action.movies.stock  

        }]
        case 'delete':
            return state.filter(movie => movie.id !== action.id)
        default: 
        return state;

    }

}