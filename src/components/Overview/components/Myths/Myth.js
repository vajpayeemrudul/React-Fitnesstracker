import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Grid,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Image3 from '../../../../assets/images/fitness5.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Myth() {
  const classes = useStyles();

  return (

    <Grid className={classes.grid}  container spacing={0} justify = 'center'  alignItems = 'center'  style={{height:'50vh'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image3}
          title="Healthy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Myths
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Usually a good diet involves a variety nutrients but this diet selection is interrupted by some food myths which make your diet ineffective. Here are top 14 food myths, Click on learn more
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       { /* <Button size="small" color="primary">
          Share
         </Button> */}
        <Button href="https://www.washingtonian.com/2012/03/01/top-14-myths-about-food-and-nutrition/" target="_blank" size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}