import React, { useState, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.less'
// import Home from './routes/home';
const Home = lazy(() => import('./routes/home'));
const Login = lazy(() => import('./routes/login'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <div>
        <Routes>
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
