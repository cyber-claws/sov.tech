import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history} from 'store';
import { connect } from 'react-redux';
import PreLoader from  'components/PreLoader';
import NavBar from  'components/NavBar';
import indexRoutes from 'router';

const mapStateToProps = state => {
  return {
    asyncRunning: state.chuck.asyncRunning
  }};

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar/>
          <div>
          {this.props.asyncRunning ? <PreLoader/> :
            <Router history={history}>
              <Switch>
                {indexRoutes.map((prop, key) => {
                  return <Route path={prop.path} component={prop.component} key={key} />;
                })}
              </Switch>
            </Router>}
          </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, null)(App)
