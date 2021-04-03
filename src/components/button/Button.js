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
  font-weight: 500;
  padding: 0.75em;
`;

const StyledDefaultButton = styled(StyledButton)`
  color: ${(props) => props.theme.text.brand};
  background-color: #fff;
  border-radius: ${sizes.borderRadius.default};
  border: 2px solid #bcd4f8;
  transition: background-color ${transitions.bg.default};

  &:hover {
    background-color: #e9f1fd;
  }
`;

export const Button = (props) => generateButton(StyledButton, props);

export const DefaultButton = (props) =>
  generateButton(StyledDefaultButton, props);
