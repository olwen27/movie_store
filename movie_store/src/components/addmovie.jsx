import React,{useState,useContext} from 'react';
import { contextData } from './context';
import Genre from './Genre';

const AddMovie = () => {

    const {dispatch} = useContext(contextData)
   const [title,settitle] = useState('')
   const [author,setauthor] = useState('')
   const [genre,setgenre] = useState('')
   const [rate,setrate] = useState('')
   const [stock,setstock] = useState('')
   
const action = (e) =>{
    e.preventDefault()
    dispatch({type: 'addMovie', 
    movies: {title,author,genre,rate,stock}
 })
 settitle('')
 setauthor('')
}


    return (  
           <div id="form">
        <div  className="row">
            <div className="col-sm-12">
            <form  onSubmit={action}>
             
                <input className="form-control" onFocus required type="text" value={title} onChange={(e) => settitle(e.target.value)}/>
                <input  className="form-control" required type="text" value={author}  onChange={(e) => setauthor(e.target.value)}/>
                <input  className="form-control" required type="text" value={genre}  onChange={(e) => setgenre(e.target.value)}/>
                <input  className="form-control" required type="text" value={rate}  onChange={(e) => setrate(e.target.value)}/>
                <input  className="form-control" required type="text" value={stock}  onChange={(e) => setstock(e.target.value)}/>
                <button  className="btn btn-primary">Add Movie</button>
              
                </form>
            </div>
        </div>
           </div>
    );
}
 
export default AddMovie;