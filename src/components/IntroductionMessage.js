import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Suilarso from "../res/img/Suilarso.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    size: {width: 125, height: 150}
  },
}));

const IntroductionMessage = () => {
  const classes = useStyles();
  return (
    // <div className={classes.root}>
    <div >
      <Avatar alt="Suilarso" src={Suilarso} />
    </div>
  );
}



export default IntroductionMessage;