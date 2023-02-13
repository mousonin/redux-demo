import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/inputField";
import SelectField from "../../../../custom-fields/SelectField";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("This field is required"),
  categoryId: Yup.number().required(),
  photo: Yup.string().required(),
});

// npm i --save react-select
function PhotoForm(props: any) {
  const initialValues = {
    title: "",
    categoryId: null,
    photo: "",
  };
  return (
    <Formik
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              Label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                {isSubmitting && <Spinner />}
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
