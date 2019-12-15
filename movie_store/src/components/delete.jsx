import React,{useContext} from 'react';
import { contextData } from './context';

const Delete = (movie) => {
    const {dispatch} = useContext(contextData)
    return ( 
<button>{movie.title}</button>
     );
}
 
export default Delete;