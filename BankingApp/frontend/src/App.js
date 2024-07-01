import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AccountDetails from './components/AccountDetails';
import TransactionHistory from './components/TransactionHistory';
import Transfer from './components/Transfer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/account/:id" component={AccountDetails} />
          <Route path="/transactions" component={TransactionHistory} />
          <Route path="/transfer" component={Transfer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
