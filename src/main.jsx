import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import "./index.css";
import SearchProvider from "./providers/SearchProvider.jsX";
import TanStackProvider from "./providers/TanStackProvider";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen mx-auto overflow-x-hidden">
      <TanStackProvider>
        <SearchProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </SearchProvider>
      </TanStackProvider>
      <Toaster />
    </div>
  </StrictMode>
);
