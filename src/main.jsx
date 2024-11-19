import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./components/router/Routers.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
