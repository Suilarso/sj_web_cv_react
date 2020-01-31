import React from 'react';
import { Grid } from '@material-ui/core';
import IntroductionMessage from './components/IntroductionMessage';
import PersonalInfo from './components/PersonalInfo';
import BriefSummary from './components/BriefSummary';

const SJMainContainer = () => {

  return(
    // <Grid container direction="row" alignItems="baseline">
    <Grid container>
      <Grid container direction="row" >
        <Grid item={true} xs={3}>
          <IntroductionMessage />
        </Grid>

        <Grid item={true} xs={9}>
          <PersonalInfo />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item={true} xs={10}>
          <BriefSummary />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SJMainContainer;
