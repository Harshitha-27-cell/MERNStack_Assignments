// RootLayout.jsx
// Layout used for all pages

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>

      {/* Header component */}
      <Header />

      {/* Outlet renders child pages */}
      <div className="mx-20 min-h-screen">
        <Outlet />
      </div>

      {/* Footer component */}
      <Footer />

    </div>
  );
}