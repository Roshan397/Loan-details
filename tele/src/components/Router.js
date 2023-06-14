import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
import Forget from './Forget';
import Home from './Home';
import React from 'react';
import Contact from './Contact';
import Favorites from './Favorites';


export default function Router() {
    return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Sign/>}>Sign</Route>
            <Route path='Login' element={<Login/>}>Login</Route>
            <Route path='Forget' element={<Forget/>}>Forget</Route>
            <Route path='Home' element={<Home/>}>Home</Route>
            <Route path='Contact' element={<Contact/>}>Contact</Route>
            <Route path='Favorites' element={<Favorites/>}>Favorites</Route>
            
            
        </Routes> 
      </BrowserRouter>
    )
}