import React from "react";
import "../App.css";
import img1 from "../images/tokyo-magnifier-web-search-with-elements 2.png";
import img2 from "../images/tokyo-selecting-a-value-in-the-browser-window 1.jpg";
import img3 from "../images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png";
import img4 from "../images/tokyo-sending-messages-from-one-place-to-another 1.png";
import img5 from "../images/tokyo-many-browser-windows-with-different-information 1.png";
import img6 from "../images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png";
import icon from "../images/Arrow 1.png";
import icon2 from "../images/arrow 2.png";
import styled from "styled-components";
import Title from "./Title";

function Services() {
  return (
    <Maindiv>
      <Header>
        <Title
          heading="Services"
          discription="At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:"
        />
      </Header>
      <BoxType>
        <Box>
          <Leftdiv>
            <Top>
              <h3> Search engine</h3>
              <br />
              <h3>optimization</h3>
            </Top>
            <Bottom>
              <a href="">
                <img src={icon} alt="" />
                &nbsp; Learn more
              </a>
            </Bottom>
          </Leftdiv>
          <RightDiv>
            <img src={img1} alt="" />
          </RightDiv>
        </Box>

        <Box>
          <Leftdiv>
            <Top>
              <h3>Pay-per-click</h3>
              <br />
              <h3> advertising</h3>
            </Top>
            <Bottom>
              <a href="">
                <img src={icon} alt="" />
                &nbsp; Learn more
              </a>
            </Bottom>
          </Leftdiv>
          <RightDiv>
            <img src={img2} alt="" />
          </RightDiv>
        </Box>

        <Box>
          <Leftdiv>
            <Top>
              <h3>Social Media</h3>
              <br />
              <h3> Marketing</h3>
            </Top>
            <Bottom>
              <a href="">
                <img src={icon2} alt="" />
                &nbsp; Learn more
              </a>
            </Bottom>
          </Leftdiv>
          <RightDiv>
            <img src={img3} alt="" />
          </RightDiv>
        </Box>

        <Box>
          <Leftdiv>
            <Top>
              <h3>Email</h3>
              <br />
              <h3>Marketing</h3>
            </Top>
            <Bottom>
              <a href="">
                <img src={icon} alt="" />
                &nbsp; Learn more
              </a>
            </Bottom>
          </Leftdiv>
          <RightDiv>
            <img src={img4} alt="" />
          </RightDiv>
        </Box>

        <Box>
          <Leftdiv>
            <Top>
              <h3>Content</h3>
              <br />
              <h3>Creation</h3>
            </Top>
            <Bottom>
              <a href="">
                <img src={icon} alt="" />
                &nbsp; Learn more
              </a>
            </Bottom>
          </Leftdiv>
          <RightDiv>
            <img src={img5} alt="" />
          </RightDiv>
        </Box>

        <Box>
          <Leftdiv>
            <Top>
              <h3>Analytics and</h3>
              <br />
              <h3>Tracking</h3>
            </Top>
            <Bottom>
              <a href="">
                <img src={icon2} alt="" />
                &nbsp; Learn more
              </a>
            </Bottom>
          </Leftdiv>
          <RightDiv>
            <img src={img6} alt="" />
          </RightDiv>
        </Box>
      </BoxType>
    </Maindiv>
  );
}
const Maindiv = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 90px;
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
const Header = styled.div`
  margin-top: 60px;
`;
const BoxType = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Box = styled.div`
  border-radius: 45px;
  border: 1px solid rgba(25, 26, 35, 1);
  display: flex;
  justify-content: space-between;
  padding: 50px;
  width: 38%;
  height: 200px;
  margin-top: 30px;
  box-shadow: 0 6px 2px 0 rgba(0, 0, 0, 5);
  background: #f3f3f3;
  &:nth-child(2) {
    background-color: #b9ff66;
    h3 {
      background-color: #f3f3f3;
    }
  }
  &:nth-child(3) {
    background-color: #191a23;
    h3 {
      background: white;
    }
    a {
      color: white;
      img {
        background-color: white;
        color: black;
      }
    }
  }
  &:nth-child(5) {
    background: #b9ff66;
    h3 {
      background: white;
    }
  }
  &:nth-child(6) {
    background: #191a23;
    a {
      color: white;
      img {
        background: white;
      }
    }
  }
  @media (max-width: 1280px) {
    width: 33%;
    height: 150px;
  }
  @media (max-width: 980px) {
    width: 100%;
    height: 180px;
  }
  @media (max-width: 768px) {
    height: 160px;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding: 30px;
    height: 180px;
  }
  @media (max-width: 480px) {
    width: 265px;
    height: 130px;
    margin-top: 20px;
  }
  @media (max-width: 360px) {
    width: 245px;
  }
`;
const Leftdiv = styled.div`
  height: 210px;
`;
const Top = styled.div`
  margin-bottom: 93px;
  @media (max-width: 1280px) {
    margin-bottom: 60px;
  }

  h3 {
    padding: 3px;
    background: #b9ff66;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 8px;
    font-size: 30px;
    font-weight: 500;
    @media (max-width: 1280px) {
      font-size: 20px;
    }
    @media (max-width: 980px) {
      font-size: 30px;
    }
    @media (max-width: 640px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
    @media (max-width: 360px) {
      font-size: 18px;
    }
  }
`;
const Bottom = styled.div`
  width: 164px;
  height: 41px;
  a {
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-decoration: none;
    @media (max-width: 1280px) {
      font-size: 16px;
    }
    @media (max-width: 980px) {
      font-size: 18px;
    }
    @media (max-width: 480px) {
      font-size: 16px;
    }
    img {
      background: black;
      border-radius: 50%;
      padding: 5px;
      @media (max-width: 980px) {
        height: 20px;
        width: 20px;
      }
      @media (max-width: 480px) {
        height: 15px;
        width: 15px;
      }
    }
  }
`;
const RightDiv = styled.div`
  width: 210px;

  img {
    width: 100%;
    display: block;
    @media (max-width: 480px) {
      width: 120px;
      height: 120px;
    }
    @media (max-width: 360px) {
      width: 100px;
      height: 100px;
    }
  }
`;
export default Services;
