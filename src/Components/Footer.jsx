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
    position: relative;
  }
  @media (max-width: 480px) {
    margin-top: 30px;
    margin-right: 0;
    margin-left: 0;
  }
`;
const Header = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.div`
  @media (max-width: 980px) {
    display: flex;
  }
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
  @media (max-width: 768px) {
    height: 40px;
    width: 80px;
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
    @media (max-width: 980px) {
      font-size: 14px;
      margin-right: 10px;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
      text-align: center;
      margin-right: 30px;
    }
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
const Company = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    height: 20px;
  }
  @media (max-width: 640px) {
    position: absolute;
    bottom: 163px;
  }
  @media (max-width: 480px) {
    bottom: 213px;
  }
`;
const Contactdiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: center;
  }
  @media (max-width: 480px) {
    margin-top: 90px;
  }
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
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 640px) {
      font-size: 25px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  p {
    @media (max-width: 1280px) {
      font-size: 14px;
    }
    @media (max-width: 980px) {
      font-size: 12px;
    }
    @media (max-width: 640px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
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
    @media (max-width: 980px) {
      padding: 58px 20px;
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media (max-width: 640px) {
      width: 100%;
      margin-bottom: 30px;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
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
      width: 150px;
    }
    @media (max-width: 768px) {
      padding: 10px 10px;
      width: 150px;
    }
    @media (max-width: 640px) {
      width: 76%;
      margin-bottom: 20px;
      padding: 20px 35px;
    }
    @media (max-width: 480px) {
      width: 145px;
    }
    @media (max-width: 360px) {
      width: 150px;
      padding: 10px 15px;
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
    @media (max-width: 980px) {
      width: 150px;
      padding: 5px 20px;
    }
    @media (max-width: 768px) {
      padding: 10px 20px;
      width: 170px;
    }
    @media (max-width: 640px) {
      width: 100%;
      padding: 20px 35px;
    }
    @media (max-width: 360px) {
      width: 100%;
      padding: 10px 15px;
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
    @media (max-width: 480px) {
      margin-bottom: 0;
    }
    &:last-child {
      text-decoration: underline;
    }
    @media (max-width: 1280px) {
      font-size: 14px;
    }
    @media (max-width: 980px) {
      font-size: 12px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
      width: 100%;
      margin-top: 0;
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 360px) {
    text-align: center;
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
    @media (max-width: 768px) {
      height: 8px;
      width: 8px;
    }
    @media (max-width: 640px) {
      height: 20px;
      width: 20px;
    }
  }
`;
const FB = styled.div`
  img {
    @media (max-width: 768px) {
      height: 20px;
      width: 20px;
    }
    @media (max-width: 640px) {
      height: 30px;
      width: 30px;
    }
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
    @media (max-width: 768px) {
      height: 8px;
      width: 8px;
    }
    @media (max-width: 640px) {
      height: 20px;
      width: 20px;
    }
  }
`;

export default Footer;
