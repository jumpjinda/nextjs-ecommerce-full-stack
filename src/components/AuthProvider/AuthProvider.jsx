"use client";
// because in layout.jsx has metadata that work in server side so we create new provider component on top of SessionProvider and add "use client" on top of the file

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
