import React from "react";
import styled from "styled-components";
import plus from "../images/+.png";
import Title from "./Title";
import "../App.css";
import { useState } from "react";
import { workprocess } from "../utils/commonArray";

function WorkProcess() {
  const [paragraph, setParagraph] = useState(0);

  const handleClick = (index) => {
    setParagraph(index);
  };

  return (
    <Maindiv className="wrapper">
      <Heading>
        <Title
          heading="Our Working Process"
          discription="Step-by-Step Guide to Achieving Your Business Goals"
        />
      </Heading>
      <OptionDiv>
        {workprocess.map((item, index) => (
          <Item2 key={index}>
            <Item1>
              <Left>
                <h1>{index + 1}</h1>
                <h4>{item.title}</h4>
              </Left>

              <Right>
                <button onClick={() => handleClick(index)}>
                  <img src={plus} alt="" />
                </button>
              </Right>
            </Item1>
            {paragraph == index && <p>{item.description}</p>}
          </Item2>
        ))}
      </OptionDiv>
    </Maindiv>
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
