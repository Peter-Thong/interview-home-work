import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --bgColor: #2A215A;
        --medColor: #140D36;
        --darkColor: #140D36;
        --fontSuperBig: 2.5rem;
        --fontBig:1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    *{
        box-sizing: border-box;
        font-family: 'Merriweather', serif;
    }

    body{
        margin: 0;
        padding: 5rem;
        background-color: var(--bgColor);

        color: var(--white)

        a {
            text-decoration: none;
        }
    }
`;
