import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
// hooks

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
