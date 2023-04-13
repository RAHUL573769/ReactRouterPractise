import React, { createContext } from 'react';
import { MoneyContext } from './Grandpa';

const ContextApp = () => {

   const PingContext= createContext(MoneyContext);
    return (
        <div>
            
        </div>
    );
};

export {ContextApp};