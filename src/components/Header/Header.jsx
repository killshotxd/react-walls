import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
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

export default Header;
