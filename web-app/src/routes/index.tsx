import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "../components/loadingScreen";


const Dashboard = lazy(() => import('../containers/index'));

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
export default AppRoutes;