import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 45rem;
  margin: 2rem auto;

  .card {
    background: var(--darkColor);
    color: var(--white);
    border-radius: 50px;

    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3);

    .card-header {
      padding: 2rem;
      img {
        width: 100%;
        border-radius: 50px;
        border-style: none;
      }
    }

    .card-body {
      padding: 0 5rem;
      .card-text:nth-child(1) {
        display: inline-block;
      }

      .card-text:nth-child(2) {
        float: right;
      }
      a {
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
        color: var(--white);

        .card-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 2rem 0 2rem 0;
        }
      }

      .accordion {
        .card {
          background: transparent;
          color: var(--white);
          border-radius: 0;
          padding: 0;
          box-shadow: none;
          border: none;
          .card-header {
            button {
              background-color: #251c56;
              color: var(--white);
              outline: none;
              border: none;
              padding: 0.45rem 0.5rem;
              border-radius: 0.55rem;
              box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
                -4px -4px 12px 0 rgba(255, 255, 255, 0.3);
              :hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`;
