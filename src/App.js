import React from 'react';
import { Switch, Route } from 'react-router';

import NavBar from './components/SplashPage/NavBar';
import Footer from './components/SplashPage/Footer';
import SplashPageContainer from './components/SplashPage/SplashPageContainer';
import BusinessFormContainer from './components/Business/BusinessFormContainer';
import ScheduleFormContainer from './components/Schedule/ScheduleFormContainer';
import EmployeeFormContainer from './components/Employee/EmployeeFormContainer';

import './stylesheets/reset.scss';
import './stylesheets/layout.scss';
import './stylesheets/style.scss';

const App = props => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="bg">
        <Switch>
          <Route exact path="/" component={ SplashPageContainer } />
          <Route path="/new-store" component={ BusinessFormContainer } />
          <Route path="/new-employee" component={ EmployeeFormContainer } />
          <Route path="/new-schedule" component={ ScheduleFormContainer } />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  )
};

export default App;