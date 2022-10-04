import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/system';

const LoadingWrapper = styled('div')({
  margin: '0 auto',
  marginTop: '10%',
  width: '300px',
  textAlign: 'center',
});

const LoadingImage = styled('img')({
  width: '100%',
  display: 'block',
  marginBottom: '30px',
});

const AppLoad = () => {
  const [error, setError] = React.useState(false);
  setTimeout(() => setError(true), 10000);
  return (
    <LoadingWrapper>
      {!error && (
        <CircularProgress color="inherit" />
      )}
      {error && (
        <i>Sorry, please try again later.<br /><br /><small>If the problem persists, contact cs6080@cse.unsw.edu.au</small></i>
      )}
    </LoadingWrapper>
  );
}

export default AppLoad;