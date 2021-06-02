import React from 'react';
import {Card, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  title:{
    fontSize: 14,
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Step 1:', 'Step 2:', 'Step 3:','Step 4:','Step 5:'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Select the type of input.`;
    case 1:
      return 'Select the various categories available.';
    case 2:
      return `Give the Amount(In workout amount 1 should be added as it gives normal calorie expenditure).`;
    case 3:
        return `Select the date for which you want to track and then click create.`;
    case 4:
        return `Click on intake and workout text to see graphical representation of data.`;
    default:
      return 'Unknown step';
  }
}

export default function Instruc() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid className={classes.root} container spacing={0} justify = 'center'  style={{height:'50vh'}} >
        <Card className={classes.root} variant="outlined" justify = 'center' style={{height:500, width:750}}>
        <Typography variant="h6" >
          Use this App by following few simple steps:
        </Typography>
        <Typography className={classes.title} color="textSecondary"  >
          Fitness tracker provides a visual representation of Calorie intake and expenditure.You just need to give the inputs on the required fields by selecting some simple options.
        </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed. Go and track your Calorie balance.</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
     </Card>
    </Grid>
  );
}