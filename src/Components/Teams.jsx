import React, { useState } from "react";
import styled from "styled-components";
import dark from "../images/Vector.png";
import icon from "../images/linkedin (1).png";
import img1 from "../images/Mask group.png";
import img2 from "../images/Mask group (1).png";
import img3 from "../images/Mask group (3).png";
import img4 from "../images/Mask group (2).png";
import img5 from "../images/Mask group (4).png";
import img6 from "../images/Mask group (5).png";
import Title from "./Title";
import "../App.css";

function Teams() {
  const [data, setdata] = useState([
    {
      image: img2,
      name: "John Smith",
      position: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO,PPC and content strategy",
    },
    {
      image: img1,
      name: "Jane Doe",
      position: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership.Strong organizational and communication skills",
    },
    {
      image: img4,
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      description:
        " 5+ years of experience in SEO and content creation. Proficient in  keyword research and on-page optimization",
    },
    {
      image: img3,
      name: "Emily Johnson",
      position: "PPC Manager",
      description:
        " 3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      image: img5,
      name: "Brian Williams",
      position: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      image: img6,
      name: "Sarah Kim",
      position: "Content Creator",
      description:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ]);
  return (
    <Maindiv className="wrapper">
      <Header>
        <Title
          heading="Team"
          discription=" Meet the skilled and experienced team behind our successful digital
            marketing strategies"
        />
      </Header>

      <UL>
        {data.map((item) => (
          <LI>
            <TOP>
              <div>
                <Image>
                  <img src={dark} alt="" />
                  <img src={item.image} alt="" />
                </Image>

                <span>
                  <h4>{item.name}</h4>
                  <p>{item.position}</p>
                </span>
              </div>
              <small>
                <img src={icon} alt="" />
              </small>
            </TOP>
            <Border></Border>
            <Bottom>{item.description}</Bottom>
          </LI>
        ))}
      </UL>

      <Button>
        <button>See all team</button>
      </Button>
    </Maindiv>
  );
}
const Maindiv = styled.div``;
const Header = styled.div`
  margin-top: 60px;
  @media (max-width: 980px) {
    margin-top: 30px;
  }
`;
const UL = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
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
  height: 270px;
  width: 23%;
  margin-bottom: 30px;
  @media (max-width: 1280px) {
    width: 40%;
  }
  @media (max-width: 1080px) {
    width: 40%;
    height: 280px;
  }
  @media (max-width: 980px) {
    width: 35%;
    height: 250px;
  }
  @media (max-width: 980px) {
    height: 280px;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 210px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 190px;
  }
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
  @media (max-width: 980px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    width: 100%;
  }
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
    @media (max-width: 980px) {
      font-size: 16px;
      padding: 10px 35px;
    }
    @media (max-width: 768px) {
      padding: 5px 15px;
      height: 50px;
    }
    @media (max-width: 480px) {
      width: 50%;
      height: 40px;
    }
  }
  @media (max-width: 480px) {
    text-align: center;
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
