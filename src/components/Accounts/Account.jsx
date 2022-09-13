import React, { useEffect, useRef, useState } from "react";
import styles from "./Account.module.css";
import { addProjectsInDb, auth, storage, uploadImage } from "../../Firebase";
import { Button, Input } from "@chakra-ui/react";
const Account = (props) => {
  const fileInputRef = useRef();
  const userDetails = props.userDetails;
  const isAuth = props.auth;

  const [errorMessage, setErrorMessage] = useState("");

  const [imageUploadStarted, setImageUploadStarted] = useState(false);

  const [imageUploadProgress, setImageUploadProgress] = useState(0);
  const [submitButtonDisabled, setSetSubmitButtonDisabled] = useState(false);
  const [values, setValues] = useState({
    name: userDetails.name || "",
    title: "",
    thumbnail: "",
  });

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageUploadStarted(true);
    uploadImage(
      file,
      (progress) => {
        setImageUploadProgress(progress);
      },
      (url) => {
        setImageUploadStarted(false);
        setImageUploadProgress(0);
        setValues((prev) => ({ ...prev, thumbnail: url }));
      },
      (error) => {
        setImageUploadStarted(false);
        setErrorMessage(error);
      }
    );
  };

  const handleSubmission = async () => {
    setSetSubmitButtonDisabled(true);
    if (auth) {
      await addProjectsInDb({ ...values });
    }
    setSetSubmitButtonDisabled(false);
    if (props.onSubmission) props.onSubmission();
    if (props.onClose) props.onClose();
  };

  return (
    <div className={styles.container}>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <div className={styles.btn}>
        <Input
          placeholder="Enter Title"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              title: event.target.value,
            }))
          }
        />
        <Button onClick={() => fileInputRef.current.click()} variant="ghost">
          Upload Image
        </Button>
        {imageUploadStarted && (
          <p>
            <span>{imageUploadProgress.toFixed(2)}%</span> Uploaded...
          </p>
        )}

        <Button onClick={handleSubmission} disabled={submitButtonDisabled}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Account;
