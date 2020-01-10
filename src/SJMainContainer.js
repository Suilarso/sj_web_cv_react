import React from 'react';
import { Grid } from '@material-ui/core';
import IntroductionMessage from './components/IntroductionMessage';

const SJMainContainer = () => {

  return(
    <Grid container direction="row" alignItems="baseline">
  <Grid item={true} xs={6}>
    <IntroductionMessage />
    {/* <Avatar alt="Suilarso" src="home/suilarso/SJS_Pribadi/sj_web_cv_react/src/res/img/Suilarso.jpg" /> */}
    {/* <figure  >
      <img alt="Suilarso" src="/res/img/Suilarso.jpg" width={125} height={150} />
    </figure> */}
    {/* <Avatar alt="Suilarso" src="/res/img/Suilarso.jpg" /> */}
  </Grid>

  <Grid item={true} xs={6}>
    <p>Para</p>
  </Grid>
  </Grid>
  );
}

export default SJMainContainer;
