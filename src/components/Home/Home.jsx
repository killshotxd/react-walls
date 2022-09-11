import { Badge, Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";

import Header from "../Header/Header";

import styles from "./Home.module.css";
const Home = (props) => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
