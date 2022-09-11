import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { auth } from "./Firebase";
import Auth from "./components/Auth/Auth";
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // --------UseEffect for detecting state change---
  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsDataLoaded(true);
        setIsAuth(false);
        return;
      }

      setIsAuth(true);
    });

    return () => listener();
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {!isAuth && (
            <>
              <Route path="/login" element={<Auth />} />
              <Route path="/signUp" element={<Auth signUp />} />
            </>
          )}

          <Route path="/" element={<Home auth={isAuth} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
