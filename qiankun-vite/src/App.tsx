import React, { useState, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less'
// import Home from './routes/home';
const Home = lazy(() => import('./routes/home'));
const Login = lazy(() => import('./routes/login'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
