import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Grid,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Image2 from '../../../../assets/images/fitness4.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Instruc() {
  const classes = useStyles();

  return (

    <Grid className={classes.grid}  container spacing={0} justify = 'center'  alignItems = 'center'  style={{height:'50vh'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image2}
          title="Healthy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Physically Fit
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Eating a healthy balanced diet accompanied by regular exercise is essential in maintaining physical and mental health and well-being. Here are some top fitness tips, click on learn more
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       { /* <Button size="small" color="primary">
          Share
         </Button> */}
        <Button href="https://www.webmd.com/fitness-exercise/features/fitness-top-10#1" target="_blank" size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}