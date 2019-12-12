import React,{useState} from 'react';

const AddMovie = ({addmovie}) => {
   const [movie,setmovies] = useState('')
   
const action = (e) =>{
    e.preventDefault()
    addmovie(movie)
    console.log(movie)
}


    return (  
        <div>
            <form onSubmit={action}>
                <input type="text" value={movie} onChange={(e) => setmovies(e.target.value)}/>
                <button  className="btn btn-primary">Add Movie</button>
                </form>
        </div>
    );
}
 
export default AddMovie;