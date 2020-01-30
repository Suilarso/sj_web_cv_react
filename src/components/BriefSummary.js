import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // marginTop: theme.spacing(5),
  },
  summaryContainer: {
    margin: theme.spacing(1),
  },
  
}));

const BriefSummary = () => {

  const classes = useStyles();

  return (
    <div className={classes.summaryContainer}>
      <h2>Introduction</h2>
      <p >
          Thank you for your interest in my web page. I am a keen enthusiast of technology gadgets 
          and have spent years in software development and design profession within 
          electronic industries.
      </p>
      <p >
          I had more than 16 years of work experiences in embedded software development 
          for consumer electronic devices. I enjoyed every minute of my profession writing codes
          in C and Python programming languages to control the functionality of micro-controller.
          Click <a href="general.html">here</a> for a list of my most recent works history.
      </p>
      <p >
          My main area of focus in the nature of my previous works had been in <strong>researching</strong> 
          for solutions based on user requirements and <strong>translating</strong> the solutions 
          into embedded software. Click on <a href="general.html#projectTab">projects</a> to 
          see the projects I had worked on.
      </p>

      <h2>New Interest</h2>
      <p >
          After spending years in firmware development, I am still having a strong passion in it; but as I 
          continue to interact more and more with today electronic media, I finally develop new interest in 
          Web development and design. And to do that, I attended web design and development course
          conducted by ComIT and SkipTheDishes.
      </p>
      <p >
          The creation of this page is to make use of the opportunity to put into 
          practice what I learned in the course. This web page is designed around
          CSS Grid Layout.
      </p>
      <p >
          In my free time, I like to surf internet to read articles related to technology gadgets, 
          write JavaScript code to design dynamic web page for personal interest and 
          also jogging constantly to stay fit.
      </p>
      <p >I am a designer, developer, and overall thinker.</p>
    </div>
  );

}


export default BriefSummary;