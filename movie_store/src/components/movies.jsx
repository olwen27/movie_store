import React, { useState,useContext} from "react";
import uuid from 'uuid/v1'
import AddMovie from "./addmovie";
import {contextData} from './context'

const Movie = () => {

   const {movies} = useContext(contextData)
    console.log(movies)

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
            <td>{movie.Author}</td>
            <td>{movie.Genre}</td>
            <td>{movie.Rate}</td>
            <td>{movie.Stock}</td>
            <td><i class="fa fa-heart-o"></i></td>
            {/* <td><button onClick={()=> handledelete(movie)} className="btn btn-danger sm">Delete</button></td> */}
            </tr>
            ))}
                   </tbody>
           </table>

           {/* <AddMovie addmovie={addmovie}/> */}
           </div>
     );
}
 
export default Movie;