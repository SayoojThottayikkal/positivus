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
`;
export default Title;
