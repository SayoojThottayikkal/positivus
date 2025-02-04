import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <>
      <Maindiv>
        <Heading>
          <h2>Contact Us </h2>
          <p>
            Connect with Us: Let's Discuss Your <br /> Digital Marketing Needs
          </p>
        </Heading>
      </Maindiv>
    </>
  );
}
const Maindiv = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  height: 100vh;
`;
const Heading = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  height: 51px;
  h2 {
    margin-right: 40px;
    background: #b9ff66;
    font-size: 40px;
    padding: 5px;
    border-radius: 4px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
`;
export default Contact;
