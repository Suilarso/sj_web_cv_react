import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import emailIcon from "../res/img/email-icon.png";
import githubIcon from "../res/img/github-icon.png";
import linkedinIcon from "../res/img/linkedin-icon.png";
import phoneIcon from "../res/img/phone-icon.png";

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
    },
    // size: {width: 125, height: 150}
  },
  
}));

const PersonalInfo = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div>
      <img src={linkedinIcon} alt="linkedin" title="linkedin"></img>
      <a href="https://www.linkedin.com/in/suilarso-japit-04b343140" target="_blank">LinkedIn URL</a>
    </div>

    <div>
      <img src={githubIcon} alt="GitHub" title="GitHub"></img>
      <a href="https://github.com/Suilarso" target="_blank">GitHub URL</a>
    </div>

    <div>
      <img src={emailIcon} alt="EMail" title="Email"></img>
      <a href="mailto:suilarso@gmail.com">suilarso@gmail.com</a>
    </div>
      
    <div>
      <img src={phoneIcon} alt="Mobile" title="Mobile"></img>
      <span>(431) 336 4539</span>
    </div>
    </div>
  );

}

export default PersonalInfo;