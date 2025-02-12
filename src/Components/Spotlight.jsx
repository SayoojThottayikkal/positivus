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
    </>
  );
}
const Mainhead = styled.div`
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
const Maincontainer = styled.div`
  margin-top: 60px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 980px) {
    margin-top: 30px;
  }
  @media (max-width: 640px) {
    margin-top: 10px;
  }
`;
const Imagecontainer = styled.div`
  height: 64px;
  width: 219.54px;
  padding: 10px 10px;
  @media (max-width: 1280px) {
    width: 150px;
  }
  @media (max-width: 980px) {
    width: 110px;
    height: 60px;
  }
  img {
    margin-top: 18px;
    height: 36px;
    width: 100%;
    display: block;
  }
  @media (max-width: 768px) {
    width: 150px;
  }
  @media (max-width: 640px) {
    width: 50%;
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
      @media (max-width: 1280px) {
        padding: 10px 15px;
      }
      @media (max-width: 980px) {
        padding: 5px 10px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    @media (max-width: 1280px) {
      margin-right: 20px;
    }
    @media (max-width: 640px) {
      display: none;
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
  width: 600.46px;
  height: 515px;
  @media (max-width: 1280px) {
    width: 50%;
    height: 600px;
  }
  @media (max-width: 980px) {
    width: 600.46px;
    height: 400px;
  }
  @media (max-width: 640px) {
    position: absolute;
    width: 300px;
    height: 200px;
    top: 110px;
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
