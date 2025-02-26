import React from "react";
import styled from "styled-components";
import minus from "../images/-.png";
import plus from "../images/+.png";
import Title from "./Title";
import "../App.css";
import { useState } from "react";

function WorkProcess() {
  const [paragraph, setParagraph] = useState(false);

  const handleClick = () => {
    setParagraph(!paragraph);
  };

  return (
    <>
      <Maindiv className="wrapper">
        <Heading>
          <Title
            heading="Our Working Process"
            discription="Step-by-Step Guide to Achieving Your Business Goals"
          />
        </Heading>
        <OptionDiv>
          <Item2>
            <Item1>
              <Left>
                <h1>01</h1>
                <h4>Consultation</h4>
              </Left>

              <Right>
                <button onClick={handleClick}>
                  <img src={plus} alt="" />
                </button>
              </Right>
            </Item1>
            {paragraph && (
              <p>
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            )}
          </Item2>

          <Item>
            <Leftdiv>
              <h1>02</h1>
              <h4>Research and Strategy Development</h4>
            </Leftdiv>
            <RightDiv>
              <button onClick={handleClick}>
                <img src={plus} alt="" />
              </button>
            </RightDiv>
          </Item>

          <Item>
            <Leftdiv>
              <h1>03</h1>
              <h4>Implementation</h4>
            </Leftdiv>
            <RightDiv>
              <button>
                <img src={plus} alt="" />
              </button>
            </RightDiv>
          </Item>

          <Item>
            <Leftdiv>
              <h1>04</h1>
              <h4>Monitoring and Optimization</h4>
            </Leftdiv>
            <RightDiv>
              <button>
                <img src={plus} alt="" />
              </button>
            </RightDiv>
          </Item>

          <Item>
            <Leftdiv>
              <h1>05</h1>
              <h4>Reporting and Communication</h4>
            </Leftdiv>
            <RightDiv>
              <button>
                <img src={plus} alt="" />
              </button>
            </RightDiv>
          </Item>
          <Item>
            <Leftdiv>
              <h1>06</h1>
              <h4>Continual Improvement</h4>
            </Leftdiv>
            <RightDiv>
              <button>
                <img src={plus} alt="" />
              </button>
            </RightDiv>
          </Item>
        </OptionDiv>
      </Maindiv>
    </>
  );
}
const Maindiv = styled.div``;
const Heading = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
  @media (max-width: 980px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;
const OptionDiv = styled.div``;
const Item2 = styled.div`
  border: 1px solid black;
  height: 100%;
  margin-bottom: 30px;
  padding: 41px 60px;
  border-radius: 45px;
  box-shadow: 0 6px 2px 0 rgba(0, 0, 0, 5);
  &:hover {
    background: #b9ff66;
  }

  @media (max-width: 1280px) {
    height: 100%;
  }
  @media (max-width: 980px) {
    height: 100%;

    padding: 31px 60px;
  }
  @media (max-width: 640px) {
    height: 100%;
  }

  p {
    border-top: 1px solid black;
    padding: 20px 0;
    @media (max-width: 1280px) {
      font-size: 14px;
    }
    @media (max-width: 980px) {
      font-size: 12px;
      padding: 10px 0;
    }
    @media (max-width: 768px) {
      font-size: 10px;
      padding: 5px;
    }
    @media (max-width: 640px) {
      font-size: 8px;
    }
  }
  @media (max-width: 768px) {
    height: 100%;
    background-color: #f3f3f3;

    padding: 41px 60px;
  }
  @media (max-width: 480px) {
    height: 100%;

    padding: 21px 30px;
    margin-bottom: 20px;
  }
`;
const Item1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    border-bottom: none;
  }
  @media (max-width: 480px) {
    height: 50px;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 60px;
    font-weight: 500;
    margin-right: 30px;
    @media (max-width: 768px) {
      font-size: 50px;
    }
    @media (max-width: 640px) {
      font-size: 40px;
    }
  }
  h4 {
    font-size: 30px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
const Right = styled.div`
  button {
    border-radius: 50%;
    padding: 8px;
    img {
      width: 100%;
      display: block;
      @media (max-width: 480px) {
        height: 20px;
        width: 20px;
      }
    }
  }
`;
const Item = styled.div`
  background-color: #f3f3f3;
  border: 1px solid black;
  height: 80px;
  margin-bottom: 30px;
  padding: 41px 60px;
  border-radius: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1280px) {
    height: 60px;
  }
  @media (max-width: 768px) {
    height: 50px;
  }
  @media (max-width: 480px) {
    height: 40px;
    padding: 21px 30px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 60px;
    font-weight: 500;
    margin-right: 30px;
    @media (max-width: 768px) {
      font-size: 50px;
    }
    @media (max-width: 640px) {
      font-size: 40px;
    }
  }
  h4 {
    font-size: 30px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 20px;
      margin-right: 5px;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 2px 0 rgba(0, 0, 0, 5);
`;
const Leftdiv = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 60px;
    font-weight: 500;
    margin-right: 30px;
    @media (max-width: 768px) {
      font-size: 50px;
    }
    @media (max-width: 480px) {
      font-size: 40px;
    }
  }
  h4 {
    font-size: 30px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;
const RightDiv = styled.div`
  button {
    border-radius: 50%;
    padding: 8px;
    img {
      width: 100%;
      display: block;
      @media (max-width: 480px) {
        height: 20px;
        width: 20px;
      }
    }
  }
`;

export default WorkProcess;
