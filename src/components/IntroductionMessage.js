import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
// import Suilarso from "./res/img/Suilarso.jpg";
import suilarso from "./res/img/Suilarso.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const IntroductionMessage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    {/* <Avatar alt="Suilarso" src="./res/img/Suilarso.jpg" width={125} height={150} /> */}
    <Avatar alt="Suilarso" src={suilarso} width={125} height={150} />
    </div>
    // <figure >
    //   <img alt="Suilarso" src="./res/img/Suilarso.jpg" width={125} height={150} />
    // </figure>
  );
}



export default IntroductionMessage;