import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { GitHub } from "react-feather";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
const Header = (props) => {
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
        <Button colorScheme="gray" variant="ghost" onClick={handleNextBtnClick}>
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
  );
};

export default Header;
