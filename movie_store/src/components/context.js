import React,{createContext,useState} from 'react';
import uuid from 'uuid/v1'
 
export const contextData = createContext()

   const Context = (props) => {

   const [movies,setmovie] =useState([{
        id:uuid(),
        title:"fast and furious", 
        Author:"kelvin", 
        Genre:"Action",
        Rate:4,Stock:5
    }])

   const  addmovie = (title) =>{
        setmovie([...movies, {title, id:uuid()}])
    }

 const  handledelete = (movie) =>{
     const mov = movies.filter(m => m.id !== movie.id)
     setmovie(mov)
       console.log(movies)
   }


    return (  
        <contextData.Provider value={{movies, handledelete,addmovie}}>
            {props.children}
        </contextData.Provider>
     
    );
   }
    
   export default Context;
