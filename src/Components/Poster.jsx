import React from "react";
import styled from "styled-components";
import icon from "../images/Arrow 1.png";
import image from "../images/Frame 19.png";

function Poster() {
  return (
    <>
      <Maindiv>
        <BoxContainer>
          <LeftDiv>
            <h3>Let’s make things happen</h3>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button>Get your free proposal</button>
          </LeftDiv>
          <RightDiV>
            <img src={image} alt="" />
          </RightDiV>
        </BoxContainer>
        <HeaderContainer>
          <h2>Case Studies </h2>
          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </HeaderContainer>
        <LearnMore>
          <ul>
            <li>
              <p>
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </p>
              <span>
                Learn more &nbsp;
                <img src={icon} alt="" />
              </span>
            </li>

            <li>
              <p>
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </p>
              <span>
                Learn more &nbsp;
                <img src={icon} alt="" />
              </span>
            </li>

            <li>
              <p>
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </p>
              <span>
                Learn more &nbsp;
                <img src={icon} alt="" />
              </span>
            </li>
          </ul>
        </LearnMore>
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
`;
const BoxContainer = styled.div`
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  height: 347px;
  border-radius: 45px;
  @media (max-width: 1280px) {
    height: 250px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 980px) {
    height: 220px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 640px) {
    text-align: center;
  }
`;
const LeftDiv = styled.div`
  width: 500px;
  height: 227px;

  h3 {
    font-size: 30px;
    font-weight: 500;
    @media (max-width: 1280px) {
      font-size: 20px;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    @media (max-width: 1280px) {
      font-size: 14px;
    }
    @media (max-width: 980px) {
      width: 90%;
    }
  }
  button {
    height: 68px;
    width: 288px;
    padding: 20px 35px;
    color: white;
    background: #191a23;
    border-radius: 14px;
    font-size: 18px;
    font-weight: 400;
    @media (max-width: 1280px) {
      padding: 10px 25px;
      height: 50px;
      width: 190px;
      font-size: 12px;
    }
  }
`;
const RightDiV = styled.div`
  height: 394px;
  @media (max-width: 1280px) {
    width: 50%;
    height: 270px;
  }
  @media (max-width: 980px) {
    height: 230px;
  }
  @media (max-width: 640px) {
    display: none;
  }

  img {
    width: 100%;
    display: block;
    @media (max-width: 980px) {
      height: 100%;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 60px;
  @media (max-width: 980px) {
    margin-top: 45px;
    margin-bottom: 30px;
  }

  h2 {
    border-radius: 4px;
    margin-right: 40px;
    background-color: #b9ff66;
    font-size: 40px;
    font-weight: 500;
    height: 51px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1280px) {
      font-size: 30px;
      padding: 10px;
    }
    @media (max-width: 640px) {
      font-size: 20px;
      margin-right: 10px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    width: 580px;
    @media (max-width: 1280px) {
      font-size: 12px;
    }
  }
`;
const LearnMore = styled.div`
  ul {
    background-color: #191a23;
    justify-content: space-between;
    display: flex;
    padding: 70px 60px;
    border-radius: 45px;
    @media (max-width: 980px) {
      padding: 35px 30px;
    }
    @media (max-width: 640px) {
      background-color: white;
      padding: 0;
    }
    li {
      width: 286px;
      height: 163px;
      border-right: 1px solid white;
      margin: 0 auto;

      @media (max-width: 980px) {
        height: 180px;
      }
      @media (max-width: 768px) {
        width: 33%;
      }
      @media (max-width: 640px) {
        background-color: #191a23;
        padding: 10px;
        height: 150px;
        width: 50%;
        border-radius: 45px;
        margin-right: 0;
      }

      &:last-child {
        border-right: 0;
        @media (max-width: 640px) {
          display: none;
        }
        p {
        }
      }

      p {
        color: white;
        line-height: 22.97px;
        margin-right: 30px;
        @media (max-width: 1280px) {
          font-size: 14px;
          margin-left: 20px;
        }
        @media (max-width: 980px) {
          font-size: 12px;
          line-height: 20px;
        }
        @media (max-width: 768px) {
          font-size: 11px;
          line-height: 18px;
        }
        @media (max-width: 640px) {
          font-size: 11px;
          line-height: 16px;
        }
      }
      span {
        text-align: center;
        color: #b9ff66;
        @media (max-width: 1280px) {
          font-size: 14px;
          margin-left: 20px;
        }

        img {
          height: 15px;
          width: 15px;
          @media (max-width: 1280px) {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }
`;

export default Poster;
