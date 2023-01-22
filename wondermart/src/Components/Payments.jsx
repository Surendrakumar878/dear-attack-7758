import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button, Heading } from "@chakra-ui/react";

export const  Payment = () =>{
  const [cardNumberFirst, setCardNumberFirst] = useState("")
  const [cardNumberSecond, setCardNumberSecond] = useState("")
  const [holderName, setHolderName] = useState("")
  const [cardNumberThird, setCardNumberThird] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
    

  


  return (
    <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="20" lg="10" xl="15">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <Heading>Payment</Heading>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <label>Card Number</label>
                    <MDBInput
                      // label="Card Number"
                      id="form1"
                      type="text"
                      size="lg"
                      value={cardNumberFirst}
                      onChange={(e) => setCardNumberFirst(e.target.value)}
                    />
                  </div>
                </div>
                <a href="#!"  onClick={(e) => setCardNumberFirst("")} color="blue" >Remove card</a>
              </div>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                  <label>Card Number</label>
                    <MDBInput
                      // label="Card Number"
                      id="form2"
                      type="text"
                      size="lg"
                      value={cardNumberSecond}
                      onChange={(e) => setCardNumberSecond(e.target.value)}
                    />
                  </div>
                </div>
                <a href="#!" onClick={(e) => setCardNumberSecond("")} color="blue">Remove card</a>
              </div>
              <p className="fw-bold mb-4">Add new card:</p>
              <label>Cardholder's Name</label>
              <MDBInput
                // label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
                value={holderName}
                onChange={(e) => setHolderName(e.target.value)}
              />
              <MDBRow className="my-4">
              <label>Card Number</label>
                <MDBCol size="7">
                  <MDBInput
                    // label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                    value={cardNumberThird}
                    onChange={(e) => setCardNumberThird(e.target.value)}
                  />
                </MDBCol>
                <MDBCol size="3" mt="-10px">
                <label>Expire</label>
                  <MDBInput
                    // label="Expire"
                    id="form5"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </MDBCol>
                <MDBCol size="2">
                <label>CVV</label>
                  <MDBInput
                    // label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
              <Link to={"/success"}>
              <Button colorScheme={"whatsapp"} color="white" size="lg" block>
                Add card
              </Button>
              </Link>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}