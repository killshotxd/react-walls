import { Badge, Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

import styles from "./Home.module.css";
const Home = (props) => {
  const handleNextBtnClick = () => {
    if (isAuth) navigate("/account");
    else navigate("/login");
  };

  const handleLogOut = async () => {
    await signOut(auth);
  };

  const isAuth = props.auth ? true : false;
  const navigate = useNavigate();
  return (
    <div>
      <Button colorScheme="violet" variant="link" onClick={handleNextBtnClick}>
        {isAuth ? "Manage your Uploads" : "SignUp"}
      </Button>
      {isAuth ? (
        <Button colorScheme="pink" variant="link" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
