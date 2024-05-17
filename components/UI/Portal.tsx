"use client";

import { useEffect, useState, ReactElement } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: { children: ReactElement }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  });

  return mounted ? createPortal(children, document.body) : null;
};

export default Portal;
