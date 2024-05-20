import { useState } from "react";
import { Outlet } from "react-router-dom";
// hooks

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Outlet />
    </>
  );
}
