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
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import img1 from "../Login/images/img1.png";
import img2 from "../Login/images/img2.jpg";
import { useNavigate } from "react-router-dom";

const styles = {
  height: "797px",
};
const Signup = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/Login");
  };
  return (
    <>
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
                  <MDBRow className="my-3">
                    <MDBCol>
                      <MDBInput
                        wrapperClass="mb-2"
                        label="First name"
                        id="formControlLg"
                        type="email"
                        size="lg"
                      />
                    </MDBCol>
                    <MDBCol className="d-flex justify-content-end">
                      <MDBInput
                        wrapperClass="mb-2"
                        label="Last name"
                        id="formControlLg"
                        type="password"
                        size="lg"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Confirm Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />

                  <div className="row mb-4">
                    <div className="col d-flex justify-content-left">
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
                          I agree with terms and conditions
                        </label>
                      </div>
                    </div>
                  </div>
                  <MDBBtn
                    className="mb-4 px-3 w-75 text-center mx-auto"
                    color="dark"
                    size="lg"
                    onClick={handleClick1}
                  >
                    Sign up
                  </MDBBtn>
                  <p className="text-center" style={{ marginTop: "80px" }}>
                    Term of use. Privacy policy
                  </p>
                </MDBCardBody>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Signup;
