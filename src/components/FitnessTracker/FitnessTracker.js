import React from 'react'
import {Grid,Button} from '@material-ui/core';
import CardLayout from './CardLayout/CardLayout';
import useStyles from './style';
import Middle from './Middle/Middle'
import {NavLink} from 'react-router-dom'
import Appbar from './Appbar/Appbar'

function FitnessTracker() {

    const classes = useStyles();

    return (
       /* <div>
           { <p style={{color:'white'}}>Hello I am Fitness Tracker Page</p> } 

        </div> */


        <div>
            <Appbar/>
            
            <Button style={{background:'pink',color:'black',margin:'20px',float:'right'}}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/mainpage">See How To Use</NavLink></Button> 
            <Button style={{background:'pink',color:'black',margin:'20px',float:'left'}}><NavLink style={{ textDecoration: 'none', color: 'black' }} to="/overview">Fitness Tips</NavLink></Button>

            <Grid className={classes.grid}  container spacing={0} alignItems = 'center' justify = 'center' style={{height:'50vh'}} >
              <Grid item xs={12} sm={4} style={{color:'white'}} >
                      <CardLayout  title ="Intake" />
              </Grid>
              <Grid item xs={12} sm={3} style={{color:'white'}} >
                      <Middle/>
              </Grid>
              <Grid item xs={12} sm={4} style={{color:'white'}} >
                      <CardLayout title = "Workout"/>
              </Grid>
            </Grid>
        </div>
    )
}

export default FitnessTracker
