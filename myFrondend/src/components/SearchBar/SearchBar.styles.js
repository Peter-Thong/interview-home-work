import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  margin-top: 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: 40rem;
  width: 100%;
  height: 55px;
  background: var(--bgColor);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: var(--fontMed);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`;
