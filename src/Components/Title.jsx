import styled from "styled-components";

function Title(props) {
  return (
    <Div>
      <h2>{props.heading}</h2>
      <p>{props.discription}</p>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h2 {
    background: #b9ff66;
    font-size: 40px;
    display: inline;
    border-radius: 7px;
    padding-right: 7px;
    padding-left: 7px;
    margin-right: 40px;
  }
  p {
    width: 49%;
    font-size: 18px;
    font-weight: 400;
  }
  @media (max-width: 1280px) {
    h2 {
    }
    p {
    }
  }
  @media (max-width: 980px) {
    h2 {
      font-size: 36px;
      margin-right: 20px;
    }
    p {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2 {
    }
    p {
    }
  }
  @media (max-width: 480px) {
    h2 {
    }
    p {
    }
  }
  @media (max-width: 360px) {
    h2 {
    }
    p {
    }
  }
`;
export default Title;
