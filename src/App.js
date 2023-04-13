import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Componenets/Main';
import Home from './Componenets/Home';
import About from './Componenets/About';
import Orsers from './Componenets/Orsers';
import Grandpa from './Componenets/Grandpa';

function App() {

const router=createBrowserRouter([


{
  path:'/',element:<Main></Main>,children:[

    {
      path:"/home",
      
      loader:()=>{
return fetch("tshirt.json")
      },
      element:<Home></Home>
    },
    {
      path:"/",
      
      loader:()=>{
return fetch("tshirt.json")
      },
      element:<Home></Home>
    },
    {
      path:"/about",element:<About></About>
    },
    {
      path:"/grandpa",element:<Grandpa></Grandpa>
    },
    {
      path:"/orders",element:<Orsers></Orsers>
    }
  ]
}

])

  return (
    <div className='App' >
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
