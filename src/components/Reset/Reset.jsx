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
const styles = {
  height: "527px",
};
const Reset = () => {
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

            <MDBCol md="6" className="mx-auto">
              <div className="container">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2">
                    <img
                      src={img1}
                      alt=""
                      style={{ height: 80, width: 80, marginLeft: "80px" }}
                    />
                    <span className="h3 fw-bold mb-3 mt-4 ml-5 text-center">
                      Zetta Circles
                    </span>
                  </div>

                  <p
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Enter your email and we send you a password reset link.{" "}
                  </p>

                  <MDBInput
                    wrapperClass="mb-2"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />

                  <MDBBtn
                    className="mb-4 px-3 w-50 text-center mx-auto mt-3"
                    color="dark"
                    size="lg"
                  >
                    Send request
                  </MDBBtn>
                  <p className="text-center" style={{ marginTop: "122px" }}>
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

export default Reset;
