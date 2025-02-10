import React from "react";
import styled from "styled-components";
import logo from "../images/Vector (1).png";
import logo1 from "../images/Positivus.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/Social icon.png";
import twitter from "../images/twitter (1).png";

function Footer() {
  return (
    <>
      <Maindiv>
        <Header>
          <Logo>
            <img src={logo} alt="" />
            <img src={logo1} alt="" />
          </Logo>
          <Nav>
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </Nav>
          <Company>
            <LK>
              <img src={linkedin} alt="" />
            </LK>
            <FB>
              <img src={facebook} alt="" />
            </FB>
            <TW>
              <img src={twitter} alt="" />
            </TW>
          </Company>
        </Header>
        <Contactdiv>
          <Leftdiv>
            <h4>Contact us:</h4>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </Leftdiv>
          <Rightdiv>
            <input type="email" placeholder="Email" />
            <button>Subscribe to news</button>
          </Rightdiv>
        </Contactdiv>
        <FooterDiv>
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </FooterDiv>
      </Maindiv>
    </>
  );
}
const Maindiv = styled.div`
  margin-top: 80px;
  padding: 55px 60px 50px 60px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: #191a23;
  border-top-right-radius: 45px;
  border-top-left-radius: 45px;
  color: white;
  @media (max-width: 1280px) {
    margin-left: 80px;
    margin-right: 80px;
  }
`;
const Header = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    &:first-child {
      margin-right: 8px;
      height: 28.4px;
      width: 28.9px;
      @media (max-width: 1280px) {
        height: 25.4px;
        width: 20.9px;
      }
    }
    @media (max-width: 1280px) {
      height: 25.4px;
      width: 60.9px;
    }
  }
`;
const Nav = styled.ul`
  display: flex;

  li {
    margin-right: 40px;
    cursor: pointer;
    @media (max-width: 1280px) {
      margin-right: 20px;
    }
  }
`;
const Company = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Contactdiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Leftdiv = styled.div`
  h4 {
    background-color: rgb(185, 255, 102);
    color: black;
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    padding: 0 5px;
    border-radius: 8px;
    margin-bottom: 0;
  }
  p {
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;
const Rightdiv = styled.div`
  padding: 58px 40px 58px 40px;
  background: #292a32;

  border-radius: 10px;
  @media (max-width: 1280px) {
    display: flex;
    justify-content: center;
  }
  input {
    padding: 20px 35px;
    border-radius: 14px;
    background: #292a32;
    color: white;
    border: 1px solid white;
    margin-right: 10px;
    cursor: pointer;
    @media (max-width: 1280px) {
      padding: 5px 10px;
    }
  }
  button {
    background-color: rgb(185, 255, 102);
    padding: 20px 35px;
    border-radius: 14px;
    cursor: pointer;
    @media (max-width: 1280px) {
      padding: 5px 55px;
    }
  }
`;
const FooterDiv = styled.div`
  margin-top: 30px;
  display: flex;
  border-top: 1px solid white;
  p {
    padding: 20px 0;
    margin-right: 30px;
    &:last-child {
      text-decoration: underline;
    }
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;
const LK = styled.div`
  background: white;
  border-radius: 50%;
  padding: 7px;
  margin-right: 10px;
  img {
    width: 100%;
    display: block;
  }
`;
const FB = styled.div`
  img {
  }
`;

const TW = styled.div`
  background: white;
  border-radius: 50%;
  padding: 7px;
  margin-left: 10px;
  img {
    width: 100%;
    display: block;
  }
`;

export default Footer;
