import React, { useEffect, useState } from "react";
import Body from "../Body/Body";
import styles from "./Header.module.css";
import { GitHub } from "react-feather";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
const Home = (props) => {
  const isAuth = props.auth ? true : false;
  const navigate = useNavigate();

  const handleNextBtnClick = () => {
    if (isAuth) navigate("/account");
    else navigate("/login");
  };

  const handleLogOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>
            {" "}
            <a href="https://github.com/killshotxd">
              React Walls <GitHub />
            </a>
          </p>
        </div>
        <div className={styles.right}>
          <Button
            colorScheme="gray"
            variant="ghost"
            onClick={handleNextBtnClick}
          >
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
      </div>
      <Body />
    </>
  );
};

export default Home;
