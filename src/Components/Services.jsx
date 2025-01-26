import React from "react";
import "../App.css";
import img1 from "../images/tokyo-magnifier-web-search-with-elements 2.jpg";
import img2 from "../images/tokyo-selecting-a-value-in-the-browser-window 1.jpg";
import img3 from "../images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.png";
import img4 from "../images/tokyo-sending-messages-from-one-place-to-another 1.png";
import img5 from "../images/tokyo-magnifier-web-search-with-elements 2.jpg";
import img6 from "../images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.png";
import icon from "../images/Icon.jpg";
import icon2 from "../images/Icon.png";
import styled from "styled-components";

function Services() {
  return (
    <>
      <Maindiv>
        <Header>
          <h2>Services</h2>
          <p>
            At our digital marketing agency, we offer a range of services to{" "}
            <br />
            help businesses grow and succeed online. These services include:
          </p>
        </Header>
        <Boxmodel>
          <li>
            <div>
              <h3>
                Search engine <br />
                optimization
              </h3>
              <p>
                <img src={icon} alt="" />
                Learn more
              </p>
            </div>
            <Imagediv>
              <img src={img1} alt="" />
            </Imagediv>
          </li>

          <li>
            <div>
              <h3>
                Pay-per-click <br />
                advertising
              </h3>
              <p>
                <img src={icon} alt="" />
                Learn more
              </p>
            </div>
            <Imagediv>
              <img src={img2} alt="" />
            </Imagediv>
          </li>

          <li>
            <div>
              <h3>
                Social Media <br />
                Marketing
              </h3>
              <p>
                <img src={icon2} alt="" />
                Learn more
              </p>
            </div>
            <Imagediv>
              <img src={img3} alt="" />
            </Imagediv>
          </li>

          <li>
            <div>
              <h3>
                Email <br />
                Marketing
              </h3>
              <p>
                <img src={icon} alt="" />
                Learn more
              </p>
            </div>
            <Imagediv>
              <img src={img4} alt="" />
            </Imagediv>
          </li>

          <li>
            <div>
              <h3>
                Content <br />
                Creation
              </h3>
              <p>
                <img src={icon} alt="" />
                Learn more
              </p>
            </div>
            <Imagediv>
              <img src={img5} alt="" />
            </Imagediv>
          </li>

          <li>
            <div>
              <h3>
                Analytics and <br />
                Tracking
              </h3>
              <p>
                <img src={icon2} alt="" />
                Learn more
              </p>
            </div>
            <Imagediv>
              <img src={img6} alt="" />
            </Imagediv>
          </li>
        </Boxmodel>
      </Maindiv>
    </>
  );
}
const Maindiv = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`;
const Header = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  h2 {
    padding: 7px;
    background: #b9ff66;
    margin-right: 40px;
    font-family: "spaceGroesk_semibold";
    font-weight: 500;
    font-size: 40px;
    border-radius: 6px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    font-family: "spaceGroesk_light";
  }
`;
const Boxmodel = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    border: 1px solid #191a23;
    border-radius: 45px;
    box-shadow: rgba(25, 26, 35, 1);
    display: flex;
    width: 430px;
    height: 200px;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;

    div {
      h3 {
      }
      p {
        margin: 0 auto;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;
const Imagediv = styled.div``;

export default Services;
