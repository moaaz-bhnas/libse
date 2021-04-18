import { memo, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Input from "./Input";

const StyledForm = styled.form`
  margin-right: auto;
  padding: 0 1em;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Form = () => {
  const formRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleKeyDown = useCallback(({ key }) => {
    if (key === "Escape") setActive(false);
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
    <StyledForm onKeyDown={handleKeyDown} active={active} ref={formRef}>
      <Input active={active} setActive={setActive} />
      {active && <Dropdown />}
    </StyledForm>
  );
};

export default memo(Form);
