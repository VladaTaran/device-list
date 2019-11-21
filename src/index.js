import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SnackbarProvider } from "notistack";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import rootReducer from "ducks/reducers";
import rootSaga from "ducks/sagas";

import { Container } from "@material-ui/core";

import { ThemeProvider } from "@material-ui/styles";
import outerTheme from "./theme";
import { composeWithDevTools } from "redux-devtools-extension";
import { HelmetProvider } from "react-helmet-async";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

function render() {
  ReactDOM.render(
    <HelmetProvider>
      <ThemeProvider theme={outerTheme}>
        <Container maxWidth={false}>
          <Provider store={store}>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </Provider>
        </Container>
      </ThemeProvider>
    </HelmetProvider>,
    document.getElementById("root") 
  );
}

render();

// store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
