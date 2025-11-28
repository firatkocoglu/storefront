"use client";

import { fetchCsrfToken } from "@/lib/csrf";
import { useEffect } from "react";

const CsrfProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    fetchCsrfToken().catch(console.error);
  }, []);

  return <>{children}</>;
};

export default CsrfProvider;
