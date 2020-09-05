import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible'
//引入路由依赖，并起一个别名，因为原先的名字太长了
import {BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './router/AppRouter'

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>,
  document.getElementById('root')
);


