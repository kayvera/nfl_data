import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #cd0001;
  color: white;
  border: 1px solid #cd0001;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const LoginButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Roboto";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 1rem;
  margin-top: 28px;
  ${getButtonStyles}
`;
