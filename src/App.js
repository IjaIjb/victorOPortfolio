
import { Suspense } from 'react';
import './App.css';
import routes from './routes/Index';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
       <Suspense>
     <Switch>
          {routes.map((route, i) => {
            return route.component ? (
              <Route
                key={i}
                exact={true}
                path={route.path}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
        </Suspense>
    </div>
  );
}

export default App;
