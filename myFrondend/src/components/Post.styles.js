import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 60rem;
  margin: 5rem auto;

  .card {
    background: var(--darkColor);
    color: var(--white);
    border-radius: 2rem;
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
      inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);

    .card-body {
      padding: 4rem 7rem;

      .card-title {
        font-size: 2rem;
        font-weight: 700;
        margin: 2rem 0 2rem 0;
      }

      img {
        width: 100%;
      }

      .content {
        margin: 2rem 0 2rem 0;
      }
    }
  }
`;
