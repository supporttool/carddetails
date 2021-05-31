
import React, { useState } from 'react';

function Carddetails(){
    const [data, setData]=useState(null);
    function getData(val){
        setData(val.target.value);
        console.warn(val.target.value);
    }
    return(
        <section className="seccarddetails">
            <h1>{data}</h1>
            <input type="text" onChange={getData}/>
        </section>
    )
}

export default Carddetails;
  









