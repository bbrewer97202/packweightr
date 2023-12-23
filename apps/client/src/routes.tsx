import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import App from "./App.tsx";
import { GearDetail } from "./components/GearDetail.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/gear/:id" element={<GearDetail />} />
    </>
  )
);
