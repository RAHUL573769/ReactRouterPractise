import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <nav>
            <li><Link to='/home'>Home</Link><Link to='/about' href="">About</Link>
            
            <Link to='/orders'>Orders</Link>
            <Link to='/grandpa'>Grandpa</Link>
            
            </li>
          </nav>  
        </div>
    );
};

export default Header;