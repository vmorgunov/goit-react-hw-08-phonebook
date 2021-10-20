import { Switch } from 'react-router';
import AppBar from 'components/AppBar/';
import { authOperations, authSelectors } from 'redux/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'components/Container/';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'components/Loader/Loader';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "register-page" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "login-page" */),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "contacts-page" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <Container>
            <AppBar />
            <Suspense fallback={<Spinner />}>
              <Switch>
                <PublicRoute exact path="/">
                  <HomeView />
                </PublicRoute>
                <PublicRoute path="/register" restricted>
                  <RegisterView />
                </PublicRoute>
                <PublicRoute path="/login" restricted redirectTo="/contacts">
                  <LoginView />
                </PublicRoute>

                <PrivateRoute path="/contacts" redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              </Switch>
            </Suspense>
            <ToastContainer position="top-center" autoClose="1500" />
          </Container>
        </>
      )}
    </>
  );
}
