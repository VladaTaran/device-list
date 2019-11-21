import React from 'react';
import { Helmet } from 'react-helmet-async';

// components
import { Typography } from '@material-ui/core';

const NoMatchPage = () => {

  return (
    <div>
      <Helmet>
        <title>Not found</title>
      </Helmet>

      <Typography variant="h2">
        Page not found
      </Typography>
    </div>
  );
};

export default NoMatchPage;
