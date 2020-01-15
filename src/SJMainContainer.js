import React from 'react';
import { Grid } from '@material-ui/core';
import IntroductionMessage from './components/IntroductionMessage';

const SJMainContainer = () => {

  return(
    <Grid container direction="row" alignItems="baseline">
      <Grid item={true} xs={3}>
        <IntroductionMessage />
      </Grid>

      <Grid item={true} xs={9}>
        <p>Para</p>
      </Grid>
  </Grid>
  );
}

export default SJMainContainer;
