// src/App.tsx
import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./styles/index.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "common/ProtectedRoute/ProtectedRoute";

const Signin = lazy(() => import("pages/auth/signin/signin"));
const Signup = lazy(() => import("pages/auth/signup/signup"));
const Dashboard = lazy(() => import("pages/dashboard"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
