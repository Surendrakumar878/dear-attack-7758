import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from "@chakra-ui/react";

export const  Payment = () => {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Added products
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg?tr=w-96,q=80"
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography color="green" tag="h5" className="text-primary">
                        Cauliflower
                        </MDBTypography>

                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">₹120</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus">-</button>
                            <input
                              className="quantity fw-bold text-black"
                              min={0}
                              defaultValue={1}
                              type="number"
                              border="1px solid green"
                            />
                            <button className="plus">+</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg?tr=w-96,q=80"
                          fluid
                          style={{ width: "150px" }}
                          alt="Cauliflower"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                        Cauliflower
                        </MDBTypography>


                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">₹50</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus"></button>
                            <input
                              className="quantity fw-bold text-black"
                              min={0}
                              defaultValue={1}
                              type="number"
                            />
                            <button className="plus"></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg?tr=w-96,q=80"
                          fluid
                          style={{ width: "150px" }}
                          alt="Cauliflower"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                        Cauliflower
                        </MDBTypography>
                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">₹59</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus"></button>
                            <input
                              className="quantity fw-bold text-black"
                              min={0}
                              defaultValue={2}
                              type="number"
                            />
                            <button className="plus"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg?tr=w-96,q=80"
                          fluid
                          style={{ width: "150px" }}
                          alt="Cauliflower"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                        Cauliflower
                        </MDBTypography>
                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">₹59</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus"></button>
                            <input
                              className="quantity fw-bold text-black"
                              min={0}
                              defaultValue={2}
                              type="number"
                            />
                            <button className="plus"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg?tr=w-96,q=80"
                          fluid
                          style={{ width: "150px" }}
                          alt="Cauliflower"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                        Cauliflower
                        </MDBTypography>
                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">₹59</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus"></button>
                            <input
                              className="quantity fw-bold text-black"
                              min={0}
                              defaultValue={2}
                              type="number"
                            />
                            <button className="plus"></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1EE564",
                        opacity: 1,
                      }}
                    />

                    <div className="d-flex justify-content-between px-x">
                      <p className="fw-bold">Discount:</p>
                      <p className="fw-bold">₹95</p>
                    </div>
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#85E8A8" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        ₹450
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                    <label>Card number</label>
                      <MDBInput
                        className="mb-5"
                        // label="Card number"
                        type="text"
                        size="lg"
                    
                      />
                         <label>Name on card</label>
                      <MDBInput
                        className="mb-5"
                        // label="Name on card"
                        type="text"
                        size="lg"
            
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                            <label>Expiration</label>
                          <MDBInput
                            className="mb-4"
                            // label="Expiration"
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                        <label>Cvv</label>
                          <MDBInput
                            className="mb-4"
                            // label="Cvv"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </MDBCol>
                      </MDBRow>

                      <Button colorScheme='whatsapp'>
                        Buy Now
                      </Button>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}