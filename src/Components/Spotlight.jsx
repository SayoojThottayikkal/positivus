import React from "react";
import styled from "styled-components";
import img from "../images/Illustration1.jpg";
import logo1 from "../images/Company logo.jpg";
import logo2 from "../images/Company logo.png";
import logo3 from "../images/Company logo5.jpg";
import logo4 from "../images/Company logo (2).jpg";
import logo5 from "../images/Company logo (3).jpg";
import logo6 from "../images/Company logo (1).jpg";

function Spotlight() {
  return (
    <Mainhead className="wrapper">
      <Maincontainer1>
        <Leftcontainer>
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button>Book a consultation</button>
        </Leftcontainer>
        <Rightcontainer>
          <img src={img} alt="" />
        </Rightcontainer>
      </Maincontainer1>
      <Banner>
        <div>
          <img src={logo1} alt="amazon" />
        </div>
        <div>
          <img src={logo3} alt="hubspot" />
        </div>
        <div>
          <img src={logo2} alt="noation" />
        </div>
        <div>
          <img src={logo6} alt="" />
        </div>
        <div>
          <img src={logo4} alt="" />
        </div>
        <div>
          <img src={logo5} alt="" />
        </div>
      </Banner>
    </Mainhead>
  );
}
const Mainhead = styled.div``;

const Maincontainer1 = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  height: 515px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 980px) {
    margin-top: 40px;
    height: 400px;
  }
  @media (max-width: 640px) {
    position: relative;
    margin-top: 30px;
  }
`;
const Leftcontainer = styled.div`
  width: 531px;
  height: 481px;
  @media (max-width: 1280px) {
    width: 50%;
  }
  @media (max-width: 640px) {
    width: 100%;
  }

  h1 {
    margin-top: 0;
    width: 531px;
    height: 231px;
    font-family: "spaceGroesk_semibold";
    font-weight: 500;
    font-size: 60px;
    @media (max-width: 1280px) {
      font-size: 50px;
      width: 410px;
      margin-bottom: 30px;
    }
    @media (max-width: 980px) {
      font-size: 40px;
      width: 300px;
      margin-bottom: 0px;
      display: inline-block;
    }

    @media (max-width: 640px) {
      font-size: 40px;
      width: 100%;
      margin-bottom: 80px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
      width: 100%;
      margin-bottom: 80px;
    }
  }
  p {
    width: 498px;
    height: 112px;
    font-family: "spaceGroesk_light";
    font-weight: 400;
    line-height: 28px;
    font-size: 20px;
    @media (max-width: 1280px) {
      font-size: 16px;
      width: 400px;
      margin-bottom: 10px;
    }
    @media (max-width: 980px) {
      font-size: 16px;
      width: 300px;
      margin-bottom: 10px;
      line-height: 20px;
      margin-top: 0;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 640px) {
      width: 100%;
      height: 60px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
      width: 100%;
    }
  }
  button {
    margin-top: 10px;
    width: 264px;
    height: 64px;
    padding: 20px 35px 20px 35px;
    border-radius: 16px;
    background: black;
    color: white;
    @media (max-width: 1280px) {
      padding: 15px 25px;
      width: 200px;
    }
    @media (max-width: 980px) {
      padding: 5px 10px;
      width: 200px;
      margin-top: 0;
    }
    @media (max-width: 768px) {
      padding: 5px 5px;
      width: 150px;
      height: 50px;
    }
    @media (max-width: 640px) {
      height: 40px;
    }
    @media (max-width: 480px) {
      width: 100%;
      height: 40px;
    }
  }
`;
const Rightcontainer = styled.div`
  width: 50%;
  height: 90%;
  @media (max-width: 1280px) {
    width: 50%;
    height: 100%;
  }
  @media (max-width: 980px) {
    width: 50%;
    height: 100%;
  }
  @media (max-width: 640px) {
    position: absolute;
    width: 80%;
    height: 50%;
    top: 110px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    margin-top: 0;
  }

  div {
    img {
      @media (max-width: 1280px) {
        width: 80%;
      }
      @media (max-width: 980px) {
        width: 60%;
      }
    }
    @media (max-width: 480px) {
      width: 28%;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default Spotlight;
