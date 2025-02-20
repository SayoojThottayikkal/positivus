import React from "react";
import styled from "styled-components";
import pic from "../images/Illustration.png";
import Title from "./Title";

function Contact() {
  return (
    <>
      <Maindiv>
        <Heading>
          <Title
            heading="Contact Us"
            discription="Connect with Us: Let's Discuss Your  Digital Marketing Needs"
          />
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
  @media (max-width: 1280px) {
    margin-left: 80px;
    margin-right: 80px;
  }
  @media (max-width: 980px) {
    margin-left: 50px;
    margin-right: 50px;
  }
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 640px) {
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 480px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
const Heading = styled.div`
  margin-top: 70px;
  margin-bottom: 60px;
`;
const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 60px 100px 80px 100px;
  border-radius: 45px;
  height: 500px;
  @media (max-width: 980px) {
    height: 480px;
    padding: 30px 50px 40px 50px;
  }
  @media (max-width: 480px) {
    width: 230px;
    height: 400px;
  }
  @media (max-width: 360px) {
    width: 200px;
    text-align: start;
    padding: 15px 50px;
    height: 410px;
  }
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
      @media (max-width: 360px) {
        width: 100%;
      }
    }
    @media (max-width: 640px) {
      width: 300px;
    }
    @media (max-width: 480px) {
      width: 250px;
    }
    @media (max-width: 360px) {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
    }
  }

  button {
    background-color: #191a23;
    padding: 20px 35px 20px 35px;
    border-radius: 14px;
    color: white;
    width: 556px;

    height: 68px;
    @media (max-width: 1280px) {
      width: 80%;
    }
    @media (max-width: 640px) {
      width: 290px;
    }
    @media (max-width: 480px) {
      width: 230px;
    }
    @media (max-width: 360px) {
      width: 200px;
      height: 50px;
    }
  }
`;
const RightDiv = styled.div`
  position: relative;
  img {
    position: absolute;

    right: -340px;
    height: 500px;
    display: block;
    @media (max-width: 1280px) {
      display: none;
    }
  }
`;
const Namediv = styled.div`
  width: 556px;
  margin-bottom: 20px;

  input {
    width: 500px;
    border-radius: 14px;
    padding: 18px 30px 18px 30px;
    @media (max-width: 1280px) {
      width: 70%;
    }
    @media (max-width: 640px) {
      width: 250px;
    }
    @media (max-width: 480px) {
      padding: 9px 15px;
      width: 200px;
    }
    @media (max-width: 360px) {
      padding: 9px 15px;
      width: 170px;
    }
  }
  @media (max-width: 640px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    width: 250px;
  }
`;
const Emaildiv = styled.div`
  width: 556px;
  margin-bottom: 20px;

  input {
    width: 500px;
    border-radius: 14px;
    padding: 18px 30px 18px 30px;
    @media (max-width: 1280px) {
      width: 70%;
    }
    @media (max-width: 640px) {
      width: 250px;
    }
    @media (max-width: 480px) {
      padding: 9px 15px;
      width: 200px;
    }
    @media (max-width: 360px) {
      padding: 9px 15px;
      width: 170px;
    }
  }
  @media (max-width: 640px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    width: 250px;
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
    @media (max-width: 1280px) {
      width: 70%;
    }
    @media (max-width: 980px) {
      height: 100px;
    }
    @media (max-width: 640px) {
      width: 250px;
    }
    @media (max-width: 480px) {
      padding: 9px 15px;
      width: 200px;
      height: 80px;
    }
    @media (max-width: 360px) {
      padding: 9px 15px;
      width: 170px;
    }
  }
  @media (max-width: 640px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    width: 250px;
  }
`;
export default Contact;
