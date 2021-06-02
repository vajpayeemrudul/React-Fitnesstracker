import React from 'react'
import {NavLink} from 'react-router-dom';
import {Button, Grid} from '@material-ui/core';
import Appbar from '../MainPage/components/Appbar/Appbar'
import Instruc from './components/Instruc/Instruc'
import Myth from './components/Myths/Myth'
import Foodhabbits from './components/Foodhabbits/Foodhabbits'
import useStyles from './style';

 const Overview = () =>{

    const classes = useStyles();

     return(
         <div>
             <Appbar/>
             <Button style={{background:'pink',color:'black',margin:'20px',float:'right'}} ><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">Track Your Calorie Balance</NavLink></Button>

             <Grid className={classes.grid}  container spacing={0} alignItems = 'center' justify = 'center' style={{height:'50vh'}} >
              <Grid item xs={12} sm={4} style={{color:'white'}} >
                        <Instruc/>
              </Grid>
              <Grid item xs={12} sm={3} style={{color:'white'}} >
                        <Foodhabbits/>
              </Grid>
              <Grid item xs={12} sm={4} style={{color:'white'}} >
                         <Myth/>
              </Grid>
            </Grid>            
 

              {/*<p style={{color:'white'}}>This is Overview Page</p> */}
              
         </div>
     )
 }

  export default Overview