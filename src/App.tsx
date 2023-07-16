import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Loader from './common/Loader';

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
