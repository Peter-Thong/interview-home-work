import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: absolute;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
  .nav {
    background: #524594;
  }
  .nav-tabs {
    border-bottom: 1px solid var(--bgColor);

    a {
      text-decoration: none;
    }

    .nav-link {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--darkColor);
      color: var(--white);
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      height: 6rem;
      font-size: var(--fontBig);
      box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
        inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);

      img {
        max-height: 100%;
      }

      .circular--landscape {
        display: inline-block;
        position: relative;

        height: 5rem;
        width: 5rem;
        overflow: hidden;
        border-radius: 50%;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          margin-bottom: -40px;
        }
      }

      p {
        margin-left: 1rem;
        margin-bottom: 0;
      }
    }
    .nav-link.active {
      background: var(--bgColor);
      border-color: var(--medColor) var(--medColor) var(--bgColor);
      box-shadow: none;
    }
  }
`;
