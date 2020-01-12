import React from 'react';
import { Grid } from '@material-ui/core';
import IntroductionMessage from './components/IntroductionMessage';

const SJMainContainer = () => {

  return(
    <Grid container direction="row" alignItems="baseline">
      <Grid item={true} xs={2}>
        <IntroductionMessage />
      </Grid>

      <Grid item={true} xs={10}>
        <p>Para</p>
      </Grid>
  </Grid>
  );
}

export default SJMainContainer;
