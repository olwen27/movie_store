import React,{createContext,useReducer} from 'react';
import uuid from 'uuid/v1'
import { movieReducer } from './Reducer';
 
export const contextData = createContext()

   const Context = (props) => {

   const [movies,dispatch] =useReducer(movieReducer,[{
        id:uuid(), 
        title:"fast and furious", 
        author:"kelvin", 
        genre:"Action", 
        rate:4, 
        stock:5  
    }])


    return (  
        <contextData.Provider value={{movies, dispatch}}>
            {props.children}
        </contextData.Provider>
     
    );
   }
    
   export default Context;
