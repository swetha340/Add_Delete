import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import Available from './Available';

function App() {
  const [pos,setPos] = useState(['C','Java','Python','C++','Perl','react']);
  const [avail,setAvail] = useState(['react']);
  const addItem =(key)=>{
    let i;
      for(i=0;i<avail.length;i++)
      {
        if(avail[i]==key)
        {
          break;
        }
      }
      if(i==avail.length)
      {
         setAvail([...avail,key])
      }
  }
  const deleteItem =(key)=>{
    const newavail = avail.filter(item=>item!=key);
    setAvail(newavail);
  }
  return (
<div className="row body">

<div className="col-sm-6">
            <h1>All Positions</h1>
            <br/><br/>

            {pos.map((item)=>
            <div key={item}>
                <div className="row" >
                  <h3 className="col-sm-4">{item}</h3>
                  <Button variant="primary" className="col-sm-4" onClick={()=>addItem(item)}>Add</Button>
                </div>
                <hr />
            </div>
            )}

      </div>

        <Available avail={avail} deleteItem={deleteItem}/>;
</div>
  );
}

export default App;
