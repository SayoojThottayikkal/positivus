import React from "react";
import styled from "styled-components";

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

export default Teams;
