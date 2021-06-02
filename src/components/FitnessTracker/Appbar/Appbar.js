import React from 'react'
import {AppBar,Toolbar,IconButton,makeStyles,Typography,Button,ButtonGroup} from "@material-ui/core";
import Menu from '@material-ui/core/Menu';
import useStyles from './style';

export default function Appbar() {

    const Bar =useStyles();

    return (
        <div className="Bar">
            <AppBar position="sticky" color="secondary">
                <Toolbar>
                 { /*  <IconButton aria-label="bar" color="inherit">
                        <Menu/>
                       </IconButton> */ }
                       
                    <Typography variant="h4" textAlign="centre">FitnessTracker</Typography>
            
                    <Button style={{background:'secondary',color:'white',margin:'20px',float:'right'}} >Calculate BMI</Button> 
                    <Button style={{background:'secondary',color:'white',margin:'20px',float:'right'}} >Fitness Blogs</Button>
                    <Button style={{background:'secondary',color:'white',margin:'20px',float:'right'}} href="https://www.healthkart.com/fitness?navKey=CP-sv-fitness" target="_blank" >Visit Healthkart</Button>
                    <Button style={{background:'secondary',color:'white',margin:'20px',float:'right'}} >Contact Us</Button>
                </Toolbar>

            </AppBar>
            
        </div>
    )
}
