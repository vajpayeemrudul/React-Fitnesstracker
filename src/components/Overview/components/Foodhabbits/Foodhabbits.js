import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Grid,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Image1 from '../../../../assets/images/fitness3.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Foodhabbits() {
  const classes = useStyles();

  return (

    <Grid className={classes.grid}  container spacing={0} justify = 'center'  alignItems = 'center'  style={{height:'50vh'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image1}
          title="Healthy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             Fuel Your Body
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Forget gimmicky diets with empty promises. For a healthy, trimmer body, get the right fuel – good nutrition, sans junk food or excess food. Build muscle, not fat. click on learn more
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       { /* <Button size="small" color="primary">
          Share
         </Button> */}
        <Button href="https://www.webmd.com/fitness-exercise/guide/health-fitness-fuel-your-body" target="_blank" size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}