import React from 'react';
import{ Link} from 'react-router-dom'
const Genre = () => {
    return (
  
<div id="genre" className="list-group">
  <Link to="#" className="list-group-item list-group-item-action active">
    Cras justo odio
  </Link>
  <Link to="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
  <Link to="#" className="list-group-item list-group-item-action">Morbi leo risus</Link>
  <Link to="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
  <Link to="#" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">Vestibulum at eros</Link>
</div>

      );
}
 
export default Genre;