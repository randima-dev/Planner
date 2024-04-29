import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "../components/loadingScreen";

const Home = lazy(() => import('../containers'));
const Hotels = lazy(() => import('../containers/hotels'));
const Photography = lazy(() => import('../containers/photography'));
const Jewellery = lazy(() => import('../containers/jewellery'));
const Saloons = lazy(() => import('../containers/saloons'));

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/hotels" element={<Hotels />} />
        <Route path="/home/photography" element={<Photography />} />
        <Route path="/home/jewellery" element={<Jewellery />} />
        <Route path="/home/saloons" element={<Saloons />} />
      </Routes>
    </Suspense>
  );
}
export default AppRoutes;