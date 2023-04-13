import React, { useContext } from 'react';
import MySelf from './MySelf';
import { MoneyContext } from './Grandpa';

const Father = () => {
const data=useContext(MoneyContext)

    return (
        <div>
         <h1>Father{data}</h1>  
         <section className='flex'>
                    <MySelf></MySelf>
                    <MySelf></MySelf>
                </section> 
        </div>
    );
};

export default Father;