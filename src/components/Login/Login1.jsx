import React from "react";
import "./style.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import img1 from "../Login/images/img1.png";
import img2 from "../Login/images/img2.jpg";
import { useNavigate } from "react-router-dom";
import { Formik, Form,  ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login1 = () => {
  const navigate = useNavigate();

  // const handleClick1 = () => {
  //   navigate("/Dashboard");
  // };
  const handleClick2 = () => {
    navigate("/Signup");
  };
  const handleClick3 = () => {
    navigate("/Reset");
  };
  const styles = {
    height: "641px",
  };

  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
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
                          style={{ height: 80, width: 80, marginLeft: "60px" }}
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
                      {/* userName */}
                      <div className="mb-4">
                        {/* <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          Username
                        </label> */}
                        <MDBInput
                          className="form-control form-control-lg"
                          type="text"
                          wrapperClass="mb-4"
                          label="Username"
                          id="formControlLg"
                          size="lg"
                          name="username"
                          // placeholder="Username"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.username}
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="mb-4">
                        {/* <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          Password
                        </label> */}
                        <MDBInput
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          wrapperClass="mb-4"
                          label="Password"
                          id="formControlLg"
                          // placeholder="Password"
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

                      <MDBRow className="my-4">
                        <MDBCol>
                          <MDBBtn
                            className="px-3"
                            color="dark"
                            size="lg"
                            type="submit"
                            // onClick={handleClick1}
                            disabled={isSubmitting}
                          >
                            Login
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol className="d-flex justify-content-end">
                          <MDBBtn
                            className="px-3"
                            color="dark"
                            size="lg"
                            outline={true}
                            onClick={handleClick2}
                          >
                            SignUp
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                      {/* 2 column grid layout for inline styling */}
                      <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="form1Example3"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form1Example3"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col">
                          <a
                            href="#!"
                            className="text-dark"
                            onClick={handleClick3}
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <p className="text-center" style={{ marginTop: "80px" }}>
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
  );
};
export default Login1;
