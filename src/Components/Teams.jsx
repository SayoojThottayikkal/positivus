import React from "react";
import styled from "styled-components";
import dark from "../images/Vector.png";
import icon from "../images/linkedin (1).png";
import img1 from "../images/Mask group.png";
import img2 from "../images/Mask group (1).png";
import img3 from "../images/Mask group (3).png";
import img4 from "../images/Mask group (2).png";
import img5 from "../images/Mask group (4).png";
import img6 from "../images/Mask group (5).png";

function Teams() {
  return (
    <>
      <Maindiv>
        <Header>
          <h2>Team</h2>
          <p>
            Meet the skilled and experienced team behind our <br />
            successful digital marketing strategies
          </p>
        </Header>
        <Boxdiv>
          <UL>
            <LI>
              <TOP>
                <div>
                  <Image>
                    <img src={dark} alt="" />
                    <img src={img2} alt="" />
                  </Image>

                  <span>
                    <h4>John Smith</h4>
                    <p>CEO and Founder</p>
                  </span>
                </div>
                <small>
                  <img src={icon} alt="" />
                </small>
              </TOP>
              <Border></Border>
              <Bottom>
                10+ years of experience in digital marketing. Expertise in SEO,
                PPC, and content strategy
              </Bottom>
            </LI>

            <LI>
              <TOP>
                <div>
                  <Image>
                    <img src={dark} alt="" />
                    <img src={img1} alt="" />
                  </Image>
                  <span>
                    <h4>Jane Doe</h4>
                    <p>Director of Operations</p>
                  </span>
                </div>
                <small>
                  <img src={icon} alt="" />
                </small>
              </TOP>
              <Border></Border>
              <Bottom>
                7+ years of experience in project management and team
                leadership. Strong organizational and communication skills
              </Bottom>
            </LI>

            <LI>
              <TOP>
                <div>
                  <Image>
                    <img src={dark} alt="" />
                    <img src={img4} alt="" />
                  </Image>
                  <span>
                    <h4>Michael Brown</h4>
                    <p>Senior SEO Specialist</p>
                  </span>
                </div>
                <small>
                  <img src={icon} alt="" />
                </small>
              </TOP>
              <Border></Border>
              <Bottom>
                5+ years of experience in SEO and content creation. Proficient
                in keyword research and on-page optimization
              </Bottom>
            </LI>

            <LI>
              <TOP>
                <div>
                  <Image>
                    <img src={dark} alt="" />
                    <img src={img3} alt="" />
                  </Image>
                  <span>
                    <h4>Emily Johnson</h4>
                    <p>PPC Manager</p>
                  </span>
                </div>
                <small>
                  <img src={icon} alt="" />
                </small>
              </TOP>
              <Border></Border>
              <Bottom>
                3+ years of experience in paid search advertising. Skilled in
                campaign management and performance analysis
              </Bottom>
            </LI>

            <LI>
              <TOP>
                <div>
                  <Image>
                    <img src={dark} alt="" />
                    <img src={img5} alt="" />
                  </Image>
                  <span>
                    <h4>Brian Williams</h4>
                    <p>Social Media Specialist</p>
                  </span>
                </div>
                <small>
                  <img src={icon} alt="" />
                </small>
              </TOP>
              <Border></Border>
              <Bottom>
                4+ years of experience in social media marketing. Proficient in
                creating and scheduling content, analyzing metrics, and building
                engagement
              </Bottom>
            </LI>

            <LI>
              <TOP>
                <div>
                  <Image>
                    <img src={dark} alt="" />
                    <img src={img6} alt="" />
                  </Image>

                  <span>
                    <h4>Sarah Kim</h4>
                    <p>Content Creator</p>
                  </span>
                </div>
                <small>
                  <img src={icon} alt="" />
                </small>
              </TOP>
              <Border></Border>
              <Bottom>
                2+ years of experience in writing and editing Skilled in
                creating compelling, SEO-optimized content for various
                industries
              </Bottom>
            </LI>
          </UL>
        </Boxdiv>
        <Button>
          <button>See all team</button>
        </Button>
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
    @media (max-width: 1280px) {
      font-size: 30px;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    font-family: "spaceGroesk_light";
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;
const Boxdiv = styled.div``;
const UL = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Border = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
`;

const LI = styled.div`
  border: 1px solid black;
  border-radius: 45px;
  padding: 40px 35px;
  box-shadow: 0 6px 2px 0 rgba(0, 0, 0, 5);
  height: 261px;
  width: 300px;
  margin-bottom: 30px;
`;
const TOP = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: last baseline;

    img {
      margin-right: 10px;
    }
  }

  span {
    h4 {
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
      @media (max-width: 1280px) {
        font-size: 14px;
      }
    }
  }
  small {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
    padding: 5px;
    text-align: center;
    img {
    }
  }
`;
const Bottom = styled.p`
  width: 90%;
`;
const Button = styled.div`
  margin-bottom: 30px;
  text-align: end;
  button {
    height: 68px;
    font-size: 20px;
    font-weight: 400;
    color: white;
    background-color: black;
    padding: 20px 35px;
    border-radius: 14px;
  }
`;
const Image = styled.div`
  position: relative;
  img {
    &:nth-child(2) {
      position: absolute;
      left: -6px;
      top: -6px;
    }
  }
`;

export default Teams;
