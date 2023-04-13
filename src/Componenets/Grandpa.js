import React, { createContext, useState } from 'react';

import './Grandpa.css';
import Father from './Father';
import Uncle from './Uncle';
import Aunty from './Aunty';
import MySelf from './MySelf';


export const RingContext=createContext('');
export const MoneyContext=createContext('');


export const NewContext=createContext("");
const Grandpa = () => {
const[house,setHouse]=useState(1);
    return (

 <RingContext.Provider value={[house,setHouse]}>
<MoneyContext.Provider value='Dadu'>
<NewContext.Provider value='34'>
<div className='grandpa'>
          <h2>Grandpa</h2>

          <section className='flex'>
            <Father>

             
            </Father>
          
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>  
        </div>
</NewContext.Provider>


</MoneyContext.Provider>


 </RingContext.Provider>
    );
};

export default Grandpa;