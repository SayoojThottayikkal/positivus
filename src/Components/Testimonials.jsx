import React from "react";
import styled from "styled-components";
import Title from "./Title";
import "../App.css";

function Testimonials() {
  return (
    <Maindiv className="wrapper">
      <Heading>
        <Title
          heading="Testimonials "
          discription=" Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services"
        />
      </Heading>

      <Slide>
        <p>
          "We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence."
        </p>
        <div>
          <h4>
            John Smith <br /> <small>Marketing Director at XYZ Corp</small>
          </h4>
        </div>
      </Slide>
    </Maindiv>
  );
}
const Maindiv = styled.div``;
const Heading = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 980px) {
    margin-top: 20px;
    margin-bottom: 20px;
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
  @media (max-width: 480px) {
    padding: 10px;
  }

  p {
    width: 50%;
    padding: 50px;
    border-radius: 45px;
    border: 1px solid #b9ff66;
    @media (max-width: 1280px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      padding: 20px;
      width: 80%;
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
