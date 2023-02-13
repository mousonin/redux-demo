import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto } from "../../photoSlices";
import styles from "./styles.module.scss";

AddEditPage.propTypes = {};

function AddEditPage(props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values: any) => {
    return new Promise((resolve) => {
      console.log(values);
      setTimeout(() => {
        const action = addPhoto(values);
        console.log(action);
        dispatch(action);
        navigate("/photos");
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className={styles["photo-edit"]}>
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
