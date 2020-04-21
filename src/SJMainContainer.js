import React from 'react';
import { Grid } from '@material-ui/core';
import IntroductionMessage from './components/IntroductionMessage';
import PersonalInfo from './components/PersonalInfo';
import BriefSummary from './components/BriefSummary';

const SJMainContainer = () => {

  return(
    // <Grid container direction="row" alignItems="baseline">
    <Grid container direction="row">
      <Grid item={true} xs={12} sm={2} md={3}>
        <Grid container direction="column">
          <IntroductionMessage />
          <PersonalInfo />
        </Grid>
      </Grid>

      <Grid item={true} xs={12} sm={10} md={9}>
        <BriefSummary />
      </Grid>
    </Grid>
  );
}

export default SJMainContainer;
