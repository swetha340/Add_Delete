import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


 function Available({avail,deleteItem}) {
     console.log(avail)
    return (
        <div className="col-sm-6">
            <h1>Available Positions</h1>
            <br/><br/>

            {avail.map((item)=>
            <div key={item} >
                <div className="row">
                  <h3 className="col-sm-4">{item}</h3>
                  <Button variant="danger" className="col-sm-4" onClick={()=>deleteItem(item)}>Delete</Button>
                </div>
                <hr />
            </div>
            )}
        </div>
    )
}

export default Available;
