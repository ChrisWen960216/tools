import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import routeItems from './config/router.config';
// import IndexPage from './routes/IndexPage';

function genRoute(item, app) {
  if (item) {
    const { path, models, page } = item;
    const component = dynamic({
      app,
      models,
      component: page,
    });
    return (<Route key={path} exact path={path} component={component} />);
  }
  return null;
}

function RouterConfig({ history, app }) {
  const routes = routeItems.map(item => genRoute(item, app));

  return (
    <Router history={history}>
      <Switch>
        {routes}
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
};


// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={IndexPage} />
//       </Switch>
//     </Router>
//   );
// }

export default RouterConfig;
