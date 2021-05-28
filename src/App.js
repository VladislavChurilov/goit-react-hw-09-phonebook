import { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Conteiner from './components/Conteiner';
import routes from './routes';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HeadPage = lazy(() =>
  import('./components/HeadPage' /* webpackChunkName: "HeadPage" */),
);
const Form = lazy(() =>
  import('./components/Form' /* webpackChunkName: "Form" */),
);
const Register = lazy(() =>
  import('./components/Register' /* webpackChunkName: "Register" */),
);
const Login = lazy(() =>
  import('./components/Login' /* webpackChunkName: "Login" */),
);
const NotFound = lazy(() =>
  import('./components/NotFound' /* webpackChunkName: "NotFound" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Conteiner>
      <AppBar />
      <Suspense fallback={<h1>Load...</h1>}>
        <Switch>
          <PrivateRoute exact path={routes.contacts} redirectTo="/login">
            <Form />
          </PrivateRoute>
          <PublicRoute
            exact
            path={routes.register}
            redirectTo="/contacts"
            restricted
          >
            <Register />
          </PublicRoute>
          <PublicRoute
            exact
            path={routes.login}
            redirectTo="/contacts"
            restricted
          >
            <Login />
          </PublicRoute>
          <PublicRoute exact path={routes.home}>
            <HeadPage />
          </PublicRoute>
          <PublicRoute>
            <NotFound />
          </PublicRoute>
        </Switch>
      </Suspense>
    </Conteiner>
  );
}
