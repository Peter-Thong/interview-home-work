import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #231b4d;
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  backface-visibility: hidden;
  color: var(--white);

  outline: none;

  p:nth-child(1) {
    font-weight: 700;
  }

  margin: 2rem auto;
  .user {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 1rem;
    p {
      margin-left: 1rem;
      margin-bottom: -5px;
    }
  }
  .circular--landscape {
    display: inline-block;
    position: relative;

    height: 4rem;
    width: 4rem;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      margin-bottom: -40px;
    }
  }
`;
