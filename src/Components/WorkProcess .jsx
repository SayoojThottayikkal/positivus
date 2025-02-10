import React from "react";
import styled from "styled-components";
import minus from "../images/-.png";
import plus from "../images/+.png";

function WorkProcess() {
  return (
    <>
      <Maindiv>
        <Heading>
          <h2>Our Working Process </h2>
          <p>Step-by-Step Guide to Achieving Your Business Goals</p>
        </Heading>
        <OptionDiv>
          <Item2>
            <Item1>
              <Left>
                <h1>01</h1>
                <h4>Consultation</h4>
              </Left>

              <Right>
                <img src={minus} alt="" />
              </Right>
            </Item1>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </Item2>

          <Item>
            <Leftdiv>
              <h1>02</h1>
              <h4>Research and Strategy Development</h4>
            </Leftdiv>
            <RightDiv>
              <img src={plus} alt="" />
            </RightDiv>
          </Item>

          <Item>
            <Leftdiv>
              <h1>03</h1>
              <h4>Implementation</h4>
            </Leftdiv>
            <RightDiv>
              <img src={plus} alt="" />
            </RightDiv>
          </Item>

          <Item>
            <Leftdiv>
              <h1>04</h1>
              <h4>Monitoring and Optimization</h4>
            </Leftdiv>
            <RightDiv>
              <img src={plus} alt="" />
            </RightDiv>
          </Item>

          <Item>
            <Leftdiv>
              <h1>05</h1>
              <h4>Reporting and Communication</h4>
            </Leftdiv>
            <RightDiv>
              <img src={plus} alt="" />
            </RightDiv>
          </Item>
          <Item>
            <Leftdiv>
              <h1>06</h1>
              <h4>Continual Improvement</h4>
            </Leftdiv>
            <RightDiv>
              <img src={plus} alt="" />
            </RightDiv>
          </Item>
        </OptionDiv>
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
const Heading = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  height: 51px;
  h2 {
    margin-right: 40px;
    background: #b9ff66;
    padding: 5px;
    font-size: 40px;
    font-weight: 500;
    border-radius: 4px;
    @media (max-width: 1280px) {
      font-size: 30px;
      width: 30%;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;
const OptionDiv = styled.div``;
const Item2 = styled.div`
  border: 1px solid black;
  height: 250px;
  margin-bottom: 30px;
  padding: 41px 60px;
  border-radius: 45px;
  box-shadow: 0 6px 2px 0 rgba(0, 0, 0, 5);
  background: #b9ff66;
  @media (max-width: 1280px) {
    height: 210px;
  }

  p {
    padding: 20px 0;
    @media (max-width: 1280px) {
      font-size: 14px;
    }
  }
`;
const Item1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 60px;
    font-weight: 500;
    margin-right: 30px;
  }
  h4 {
    font-size: 30px;
    font-weight: 500;
  }
`;
const Right = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  background: white;
  padding: 5px;
  img {
  }
`;
const Item = styled.div`
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
  h1 {
    font-size: 60px;
    font-weight: 500;
    margin-right: 30px;
  }
  h4 {
    font-size: 30px;
    font-weight: 500;
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
  }
  h4 {
    font-size: 30px;
    font-weight: 500;
  }
`;
const RightDiv = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  img {
  }
`;

export default WorkProcess;
