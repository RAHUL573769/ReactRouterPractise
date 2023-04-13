import React, { useContext } from 'react';
import { NewContext } from './Grandpa';

const Uncle = () => {

const value=useContext(NewContext)

    return (
        <div>
            <h1>Uncle{value}</h1>
        </div>
    );
};

export default Uncle;