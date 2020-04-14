import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CreateWorkshop from './components/workshops/createWorkshop';

import { Provider } from 'react-redux';

import store from './store';
import './styles/styles.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/create-workshop">
                  {() => <CreateWorkshop/>} 
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
