import React from 'react';

// components
import {
  Typography,
  Container,
} from '@material-ui/core';

// styles
import useStyles from './FooterStyle';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth={false}>
        <Typography variant="body1" align="center">Nwave &copy; Copyright {new Date().getFullYear()}</Typography>
      </Container>
    </footer>
  );
};

export default Footer;
