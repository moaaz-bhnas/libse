import styled from "styled-components";
import { sizes, transitions } from "../../utils/style";

const generateButton = (Component, props) => {
  const { type = "button", onClick, children } = props;

  return (
    <Component type={type} onClick={onClick}>
      {children}
    </Component>
  );
};

const StyledButton = styled.button`
  font-size: 1em;
  cursor: pointer;
  transition: background-color ${transitions.bg.default};
`;

const StyledDefaultButton = styled(StyledButton)`
  color: ${(props) => props.theme.text.brand};
  font-weight: 500;
  padding: 0.75em;
  background-color: #fff;
  border-radius: ${sizes.borderRadius.default};
  border: 2px solid #bcd4f8;

  &:hover,
  &:focus {
    background-color: #e9f1fd;
  }
`;

const StyledCircleButton = styled(StyledButton)`
  border: none;
  background-color: ${({ theme }) => theme.bg.default};
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.bg.grey2};
  }
`;

export const Button = (props) => generateButton(StyledButton, props);

export const DefaultButton = (props) =>
  generateButton(StyledDefaultButton, props);

export const CircleButton = (props) =>
  generateButton(StyledCircleButton, props);
