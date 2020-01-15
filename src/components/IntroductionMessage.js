import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Suilarso from "../res/img/Suilarso.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(5),
    },
    size: {width: 125, height: 150}
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const IntroductionMessage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="Suilarso" src={Suilarso} className={classes.large} />
    </div>
  );
}



export default IntroductionMessage;