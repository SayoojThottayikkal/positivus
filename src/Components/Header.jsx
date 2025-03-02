import React from "react";
import logo from "../images/Logo.jpg";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Maincontainer className="wrapper">
      <Imagecontainer>
        <img src={logo} alt="" />
      </Imagecontainer>
      <Navbarconatiner>
        <ul>
          <Nav to="/">Home</Nav>
          <Nav to="/Teams">Teams</Nav>
          <Nav to="/Services">Service</Nav>
          <Nav to="WorkProcess">Work</Nav>
          <Nav to="Testimonials">Testimonial</Nav>
          <Nav to="Contact">Contact</Nav>
          <Nav>
            <button>Request a Quote</button>
          </Nav>
        </ul>
      </Navbarconatiner>
    </Maincontainer>
  );
}
const Nav = styled(Link)`
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    display: none;
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
    gap: 10px;
  }
  li {
    margin-right: 40px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 1280px) {
      margin-right: 20px;
    }
    @media (max-width: 640px) {
      display: none;
    }
  }
`;
export default Header;
