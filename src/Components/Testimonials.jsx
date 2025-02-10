import React from "react";
import styled from "styled-components";

function Testimonials() {
  return (
    <>
      <Maindiv>
        <Heading>
          <h2>Testimonials </h2>
          <p>
            Hear from Our Satisfied Clients: Read Our Testimonials <br /> to
            Learn More about Our Digital Marketing Services
          </p>
        </Heading>

        <Slide>
          <p>
            "We have been working with Positivus for the past year and have seen
            a significant increase in website traffic and leads as a result of
            their efforts. The team is professional, responsive, and truly cares
            about the success of our business. We highly recommend Positivus to
            any company looking to grow their online presence."
          </p>
          <div>
            <h4>
              John Smith <br /> <small>Marketing Director at XYZ Corp</small>
            </h4>
          </div>
        </Slide>
      </Maindiv>
    </>
  );
}
const Maindiv = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  height: 100vh;
  @media (max-width: 1280px) {
    margin-left: 80px;
    margin-right: 80px;
  }
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
    @media (max-width: 1280px) {
      font-size: 30px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;
const Slide = styled.div`
  border-radius: 45px;
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    padding: 20px;
  }

  p {
    width: 50%;
    padding: 50px;
    border-radius: 45px;
    border: 1px solid #b9ff66;
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }
  div {
    width: 50%;
    h4 {
    }
    small {
    }
  }
  background-color: #191a23;
`;
export default Testimonials;
