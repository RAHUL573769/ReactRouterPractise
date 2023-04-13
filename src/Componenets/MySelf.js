import React from 'react';
import { useContext } from 'react';
import { RingContext } from './Grandpa';

const MySelf = () => {

  const ring=  useContext(RingContext);
    return (
        <div>
         <h1>My sELF{ring}</h1>   
        </div>
    );
};

export default MySelf;