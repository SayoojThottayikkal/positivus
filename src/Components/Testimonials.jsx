import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Maindiv>
        <Heading>
          <h2>Testimonials </h2>
          <p>
            Hear from Our Satisfied Clients: Read Our Testimonials <br /> to
            Learn More about Our Digital Marketing Services
          </p>
        </Heading>

        <Slider {...settings}>
          <Slide></Slide>
        </Slider>
      </Maindiv>
    </>
  );
}
const Maindiv = styled.div`
  margin-left: 100px;
  margin-right: 100px;
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
    font-size: 40px;
    padding: 5px;
    border-radius: 4px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
`;
const Slide = styled.div`
  background: gray;
`;
export default Testimonials;
