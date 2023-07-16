import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Loader from './common/Loader';

const SignIn = lazy(()=> import('./pages/Authentication/SignIn'));
const SignUp = lazy(()=> import('./pages/Authentication/SignUp'));
const Verify = lazy(()=> import('./pages/Authentication/Verify'));
const Category = lazy(()=> import('./pages/Authentication/Category')) ;
const ResetPassword = lazy(() => import('./pages/Authentication/ResetPassword'));
const ForgotPassword = lazy(()=> import( './pages/Authentication/ForgotPassword'));

const Appointment = lazy(() => import('./pages/Appointment'));
const Settings = lazy(() => import('./pages/Settings'));
const Prescription = lazy(() => import('./pages/Prescription'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
const Patients = lazy(() => import('./pages/Patients'));
const Pharmacy = lazy(() => import('./pages/Pharmacy'));
const Laboratories = lazy(() => import('./pages/Laboratories'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/forgot" element={<ForgotPassword />} />
        <Route path="/auth/reset" element={<ResetPassword />} />
        <Route path="/auth/category" element={<Category />} />
        <Route path="/auth/verify" element={<Verify />} />

        <Route element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/appointments"
            element={
              <Suspense fallback={<Loader />}>
                <Appointment />
              </Suspense>
            }
          />
          <Route
            path="/patients"
            element={
              <Suspense fallback={<Loader />}>
                <Patients />
              </Suspense>
            }
          />

          <Route
            path="/prescription"
            element={
              <Suspense fallback={<Loader />}>
                <Prescription />
              </Suspense>
            }
          />
          <Route
            path="/pharmacy"
            element={
              <Suspense fallback={<Loader />}>
                <Pharmacy />
              </Suspense>
            }
          />
          <Route
            path="/laboratories"
            element={
              <Suspense fallback={<Loader />}>
                <Laboratories />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
