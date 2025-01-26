import React from "react";
import styled from "styled-components";
import img from "../images/Illustration1.jpg";
import logo1 from "../images/Company logo.jpg";
import logo2 from "../images/Company logo.png";
import logo3 from "../images/Company logo5.jpg";
import logo4 from "../images/Company logo (2).jpg";
import logo5 from "../images/Company logo (3).jpg";
import logo6 from "../images/Company logo (1).jpg";
import logo from "../images/Logo.jpg";

function Spotlight() {
  return (
    <>
      <Mainhead>
        <Maincontainer>
          <Imagecontainer>
            <img src={logo} alt="" />
          </Imagecontainer>
          <Navbarconatiner>
            <ul>
              <li>About us</li>
              <li>Service</li>
              <li>Us Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>
                <button>Request a Quote</button>
              </li>
            </ul>
          </Navbarconatiner>
        </Maincontainer>
        <Maincontainer1>
          <Leftcontainer>
            <h1>Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button>Book a consultation</button>
          </Leftcontainer>
          <Rightcontainer>
            <img src={img} alt="" />
          </Rightcontainer>
        </Maincontainer1>
        <Banner>
          <li>
            <img src={logo1} alt="amazon" />
          </li>
          <li>
            <img src={logo3} alt="hubspot" />
          </li>
          <li>
            <img src={logo2} alt="noation" />
          </li>
          <li>
            <img src={logo6} alt="" />
          </li>
          <li>
            <img src={logo4} alt="" />
          </li>
          <li>
            <img src={logo5} alt="" />
          </li>
        </Banner>
      </Mainhead>
    </>
  );
}
const Mainhead = styled.div`
  height: 771px;
  margin-left: 100px;
  margin-right: 100px;
`;
const Maincontainer = styled.div`
  margin-top: 60px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Imagecontainer = styled.div`
  height: 64px;
  width: 219.54px;
  padding: 10px 10px;

  img {
    margin-top: 18px;
    height: 36px;
    width: 100%;
    display: block;
  }
`;
const Navbarconatiner = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    margin-right: 40px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    button {
      background: #fff;
      border-radius: 14px;
      padding: 20px 35px;
      border: 1px solid black;
      cursor: pointer;
      margin: 0 auto;
    }
  }
`;
const Maincontainer1 = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  height: 515px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Leftcontainer = styled.div`
  width: 531px;
  height: 481px;
  h1 {
    margin-top: 0;
    width: 531px;
    height: 231px;
    font-family: "spaceGroesk_semibold";
    font-weight: 500;
    font-size: 60px;
  }
  p {
    width: 498px;
    height: 112px;
    font-family: "spaceGroesk_light";
    font-weight: 400;
    line-height: 28px;
    font-size: 20px;
  }
  button {
    margin-top: 10px;
    width: 264px;
    height: 64px;
    padding: 20px 35px 20px 35px;
    border-radius: 16px;
    background: black;
    color: white;
  }
`;
const Rightcontainer = styled.div`
  width: 600.46px;
  height: 515px;
  img {
    width: 100%;
    display: block;
  }
`;
const Banner = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    &:first-child {
      margin-left: 0;
    }
    img {
    }
  }
`;
export default Spotlight;
