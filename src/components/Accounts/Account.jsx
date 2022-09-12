import React, { useEffect, useRef, useState } from "react";
import styles from "./Account.module.css";
import { storage } from "../../Firebase";
import { Button } from "@chakra-ui/react";
const Account = (props) => {
  const userDetails = props.userDetails;
  const isAuth = props.auth;

  const [values, setValues] = useState({
    name: userDetails.name || "",
  });

  return (
    <div className={styles.container}>
      <div className={styles.btn}>
        <Button variant="ghost">Upload</Button>
      </div>
    </div>
  );
};

export default Account;
