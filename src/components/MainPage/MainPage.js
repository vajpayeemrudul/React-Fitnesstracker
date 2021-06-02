import React from 'react'
import {NavLink} from 'react-router-dom';
import {Button} from '@material-ui/core';
import Appbar from './components/Appbar/Appbar';
import Instruc from './components/instruc/Instruc'
const MainPage = () => {
    return (
        <div>
            <Appbar/>
            {/*<p style={{color:'white'}}>This is the Main Page</p> */} 
            <Button style={{background:'pink',color:'black',margin:'20px',float:'right'}} ><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">Track Your Calorie Balance</NavLink></Button> 
             <Instruc/>
        </div>
    )
}
 
export default MainPage
 

