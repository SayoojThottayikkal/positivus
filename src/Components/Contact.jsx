import React from "react";
import styled from "styled-components";
import pic from "../images/Illustration.png";

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
        <ContactDiv>
          <LeftDiv>
            <ul>
              <li>
                <input type="checkbox" name="" id="" /> Say Hi
              </li>
              <li>
                <input type="checkbox" name="" id="" /> Get a Quote
              </li>
            </ul>

            <Namediv>
              Name <br />
              <input type="text" placeholder="name" />
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
const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 60px 100px 80px 100px;
  border-radius: 45px;
  height: 500px;
`;
const LeftDiv = styled.div`
  div {
  }
  ul {
    display: flex;
    li {
      &:first-child {
        margin-left: 0;
      }
      margin-right: 20px;
      input {
        border-radius: 50%;
      }
    }
  }

  button {
    background-color: #191a23;
    padding: 20px 35px 20px 35px;
    border-radius: 14px;
    color: white;
    width: 556px;

    height: 68px;
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
`;
const Namediv = styled.div`
  width: 556px;
  margin-bottom: 20px;

  input {
    width: 500px;
    border-radius: 14px;
    padding: 18px 30px 18px 30px;
  }
`;
const Emaildiv = styled.div`
  width: 556px;
  margin-bottom: 20px;

  input {
    width: 500px;
    border-radius: 14px;
    padding: 18px 30px 18px 30px;
  }
`;
const Messagediv = styled.div`
  width: 556px;
  margin-bottom: 20px;

  Textarea {
    width: 500px;
    height: 170px;
    border-radius: 14px;
    padding: 18px 30px 18px 30px;
  }
`;
export default Contact;
