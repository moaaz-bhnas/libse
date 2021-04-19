import { memo, useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { mediaQueries } from "../../utils/style";
import BackButton from "./BackButton";
import Dropdown from "./Dropdown";
import InputContainer from "./InputContainer";

const activeMobileStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;

const StyledForm = styled.form`
  margin-right: auto;
  padding: 0 1em;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: ${mediaQueries.search}) {
    ${({ active }) => active && activeMobileStyles}
  }
`;

const Form = () => {
  const formRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleKeyDown = useCallback(({ key }) => {
    if (key === "Escape") {
      setActive(false);
    }
    if (key === "Enter" || key === " ") {
      setActive(true);
    }
  }, []);

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (!formRef.current.contains(target)) {
        setActive(false);
      }
    },
    [formRef.current]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [formRef.current]);

  return (
    <StyledForm
      onKeyDown={handleKeyDown}
      active={active}
      ref={formRef}
      onSubmit={(event) => event.preventDefault()}
    >
      <BackButton formActive={active} setFormActive={setActive} />
      <InputContainer active={active} setActive={setActive} />
      {active && <Dropdown />}
    </StyledForm>
  );
};

export default memo(Form);