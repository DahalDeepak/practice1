import React from "react";
import img1 from "../Login/images/img1.png";
import img2 from "../Login/images/img2.jpg";
// import { useNavigate } from "react-router-dom";

import {
  MDBInput,
  MDBCol,
  MDBRow,
  
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Formik, Form,  ErrorMessage } from "formik";
import * as Yup from "yup";
const styles = {
  height: "797px",
};
const Signup1 = () => {
  const SignupSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    userName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      //   .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    agree: Yup.string(),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          agree: "false",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <MDBContainer className="my-5">
              <MDBCard>
                <MDBRow className="g-0">
                  <MDBCol md="6">
                    <MDBCardImage
                      src={img2}
                      alt="login form"
                      className="rounded-start w-100"
                      style={styles}
                    />
                  </MDBCol>
                  <MDBCol md="5" className="mx-auto">
                    <div className="container">
                      <MDBCardBody className="d-flex flex-column">
                        <div className="d-flex flex-row mt-2">
                          <img
                            src={img1}
                            alt=""
                            style={{
                              height: 80,
                              width: 80,
                              marginLeft: "60px",
                            }}
                          />
                          <span className="h3 fw-bold mb-3 mt-4 ml-5">
                            Zetta Circles
                          </span>
                        </div>
                        <p
                          className="fw-normal my-2 pb-3 text-center"
                          style={{ letterSpacing: "1px" }}
                        >
                          Please complete to create your account.
                        </p>
                        <MDBRow className="my-3">
                          <MDBCol>
                            <div className="mb-1">
                              {/* <label
                                className="form-check-label"
                                htmlFor="form1Example3"
                              >
                                First Name
                              </label> */}
                              <MDBInput
                                // className="form-control form-control-lg"
                                type="text"
                                label="First name"
                                id="formControlLg"
                                size="lg"
                                name="firstName"
                                // placeholder="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                              />
                              <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </MDBCol>
                          <MDBCol>
                            <div className="mb-1">
                              {/* <label
                                className="form-check-label"
                                htmlFor="form1Example3"
                              >
                                Last Name
                              </label> */}
                              <MDBInput
                                className="form-control form-control-lg"
                                type="text"
                                name="lastName"
                                label="Last name"
                                id="formControlLg"
                                size="lg"
                                // placeholder="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                              />
                              <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <div className="mb-2">
                          <MDBInput
                            wrapperClass="mb-2"
                            label="User Name"
                            id="formControlLg"
                            type="text"
                            size="lg"
                            name="userName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.userName}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        {/* email */}
                        <div className="mb-2">
                          {/* <label
                            className="form-check-label"
                            htmlFor="form1Example3"
                          >
                            Email
                          </label> */}
                          <MDBInput
                            className="form-control form-control-lg"
                            type="text"
                            name="email"
                            label="email"
                            id="formControlLg"
                            size="lg"
                            // placeholder="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        {/* password */}
                        {/*  */}
                        <div className="mb-2">
                          <MDBInput
                            wrapperClass="mb-2"
                            label="Password"
                            id="formControlLg"
                            type="password"
                            size="lg"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        {/* conform password */}
                        <div className="mb-2">
                          <MDBInput
                            wrapperClass="mb-2"
                            label="confirmPassword"
                            id="formControlLg"
                            type="password"
                            size="lg"
                            name="confirmPassword"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.confirmPassword}
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        {/* agree */}
                        <div className="row mb-4">
                          <div className="col d-flex justify-content-left">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                //   defaultValue
                                id="form1Example3"
                                name="agree"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.agree}
                                //   defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form1Example3"
                                for="form1Example3"
                              >
                                I agree with terms and conditions
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* submit button */}
                        <MDBRow className="my-4">
                         
                            <MDBBtn
                              className="px-5"
                              color="dark"
                              size="lg"
                              type="submit"
                              // onClick={handleClick1}
                              disabled={isSubmitting}
                            >
                              Sign Up
                            </MDBBtn>
                        
                        </MDBRow>
                        {/* 2 column grid layout for inline styling */}
                       
                        <p
                          className="text-center"
                          style={{ marginTop: "80px" }}
                        >
                          Term of use. Privacy policy
                        </p>
                      </MDBCardBody>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBContainer>
          </Form>
        )}
      </Formik>
     
    </>
  );
};

export default Signup1;
