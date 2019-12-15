import React, { useState,useContext} from "react";
import uuid from 'uuid/v1'
import AddMovie from "./addmovie";
import {contextData} from './context'
import Delete from "./delete";

const Movie = () => {

   const {movies,dispatch} = useContext(contextData)
  

    return ( 
        <div >
           <table className="table m-5">
               <thead>
                   <tr>
                   <th>Title</th>
                   <th>Author</th>
                   <th>Genre</th>
                   <th>Rate</th>
                   <th>Stock</th>
                   </tr>
               </thead>
                   <tbody>
            {movies.map(movie => 
            (<tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.author}</td>
            <td>{movie.genre}</td>
            <td>{movie.rate}</td>
            <td>{movie.stock}</td>
            <td><i class="fa fa-heart-o"></i></td>
            <td><button className="btn btn-danger btn-sm" onClick={() => dispatch({type:'delete', id: movie.id})}>Delete</button></td>
            </tr>
            ))}
                   </tbody>
           </table>

           {/* <AddMovie addmovie={addmovie}/> */}
           </div>
     );
}
 
export default Movie;