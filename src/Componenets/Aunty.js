import React, { useContext } from 'react';
import { RingContext } from './Grandpa';

const Aunty = () => {

    const [house,setHouse]=useContext(RingContext);
    return (
        <div>
            <h1>Aunty{house}</h1>
            <button onClick={()=>setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Aunty;