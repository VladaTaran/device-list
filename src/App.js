import React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  RootState  from 'ducks/reducers';
import { connect } from 'react-redux';
// components
import { Footer, Header, Notifier } from 'components';
import { LinearProgress, Fade } from '@material-ui/core';
// styles
import './App.css';
import contentStyles from './styles';

const mapStateToProps = (state = RootState) => ({
  isFetching: state.deviceManagement.isFetching
});

const App = (props) => {
  const classes = contentStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Fade in={props.isFetching} timeout={{ appear: 0, exit: 1000 }}>
          <LinearProgress className={classes.loader} color="primary" />
        </Fade>
        <Header />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {Routes.map((route, index) => {
              if (!route.routes.length) {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                );
              } else {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    render={({ match: { url } }) => (
                      <>
                        <Route path={`${url}/`} exact={true} />
                        {route.routes.map((subroute, subindex) => (
                          <Route key={subindex} path={subroute.path} component={subroute.main} exact={subroute.exact} />
                        ))}
                      </>
                    )}
                  />
                );
              }
            })}
          </Switch>
        </main>

        <Footer />

        <Notifier />

      </div>
    </Router>
  );
};

export default connect(mapStateToProps, null)(App);
