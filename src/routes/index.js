import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Switch } from "react-router-dom";
import Spinner from '../components/Spinner';
import 'react-toastify/dist/ReactToastify.css';

const ShopRoutes = React.lazy(() => import("./shop-routes"));

const AppRoot = () => {

  return (
    <React.Suspense fallback={<div><Spinner /></div>}>
      <ToastContainer />
      <Switch>
      <Route path="/" component={ShopRoutes} />
      </Switch>
    </React.Suspense>
  );
};

export default AppRoot;