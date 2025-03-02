import React from "react";
import styled from "styled-components";
import pic from "../images/Illustration.png";
import Title from "./Title";
import "../App.css";

function Contact() {
  return (
    <Maindiv className="wrapper">
      <Heading>
        <Title
          heading="Contact Us"
          discription="Connect with Us: Let's Discuss Your  Digital Marketing Needs"
        />
      </Heading>
      <ContactDiv>
        <LeftDiv>
          <Div>
            <div>
              <label htmlFor=""> </label> Say Hi
            </div>
            <div>
              <label htmlFor=""></label> Get a Quote
            </div>
          </Div>

          <Namediv>
            Name <br />
            <input type="text" placeholder="name" required />
          </Namediv>
          <Emaildiv>
            Email <br />
            <input type="email" placeholder="Email" />
          </Emaildiv>
          <Messagediv>
            Message <br />
            <textarea name="" id="" placeholder="Message"></textarea>
          </Messagediv>
          <button>Send Message</button>
        </LeftDiv>
        <RightDiv>
          <img src={pic} alt="" />
        </RightDiv>
      </ContactDiv>
    </Maindiv>
  );
}
const Maindiv = styled.div``;
const Heading = styled.div`
  margin-top: 70px;
  margin-bottom: 60px;
  @media (max-width: 980px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 60px 100px 80px 100px;
  border-radius: 45px;
  height: 100%;
  @media (max-width: 1280px) {
    padding: 30px;
  }
  @media (max-width: 980px) {
    padding: 30px 50px 40px 50px;
  }
  @media (max-width: 480px) {
    width: 75%;
    height: 100%;
  }
  @media (max-width: 360px) {
    width: 70%;
    text-align: start;
    padding: 15px 50px;
    height: 100%;
  }
`;
const LeftDiv = styled.form`
  button {
    background-color: #191a23;
    padding: 20px 35px 20px 35px;
    border-radius: 14px;
    color: white;
    width: 556px;

    height: 68px;
    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 480px) {
      width: 100%;
      padding: 10px 20px;
    }
  }
  @media (max-width: 1280px) {
    width: 70%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const RightDiv = styled.div`
  position: relative;
  img {
    position: absolute;

    right: -340px;
    height: 500px;
    display: block;
  }
  @media (max-width: 1280px) {
    display: none;
  }
`;
const Namediv = styled.div`
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 500px;
    border-radius: 14px;
    padding: 20px;
    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
    @media (max-width: 480px) {
      padding: 9px 15px;
      width: 100%;
    }
    @media (max-width: 360px) {
      padding: 9px 15px;
      width: 100%;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Emaildiv = styled.div`
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 500px;
    border-radius: 14px;
    padding: 20px;
    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
    @media (max-width: 480px) {
      padding: 9px 15px;
      width: 100%;
    }
    @media (max-width: 360px) {
      padding: 9px 15px;
      width: 100%;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Messagediv = styled.div`
  width: 100%;
  margin-bottom: 20px;

  Textarea {
    width: 90%;
    height: 170px;
    border-radius: 14px;
    padding: 20px;
    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 980px) {
      width: 100%;
      height: 120px;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
    @media (max-width: 480px) {
      padding: 9px 15px;
      width: 100%;
      width: 100%;
    }
    @media (max-width: 360px) {
      padding: 9px 15px;
      width: 100%;
    }
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  margin-bottom: 20px;
  div {
    margin-right: 40px;
    label {
      margin-right: 10px;
      padding-top: 2px;
      padding-left: 8px;
      padding-right: 8px;
      border: 1px solid black;
      border-radius: 50%;
      &:first-child {
        &:hover {
          background-color: #b9ff66;
        }
      }
    }
    @media (max-width: 360px) {
      margin-right: 20px;
    }
  }
`;
export default Contact;
