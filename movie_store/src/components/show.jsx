import React from 'react';
import Genre from './Genre'
import Movie from './movies'
import AddMovie from './addmovie';

const Show = () => {
    return ( 
        <div>
            <div className="row">
                <div className="col-sm-4">
                    <Genre/>
                </div>
                <div className="col-sm-7">
                    <Movie/>
                </div>
            

            </div>
          
        </div>
     );
}
 
export default Show;