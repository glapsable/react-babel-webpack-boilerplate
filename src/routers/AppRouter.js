import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AddEventPage from '../components/AddEventPage';
import SuccessPage from '../components/SuccessPage';

const AppRouter = () => (
  <Router>
    <Fragment>
      <Header />
      <Switch>
        <AddEventPage />
        <SuccessPage />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
