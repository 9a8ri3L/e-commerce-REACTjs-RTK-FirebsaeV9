import styled, { createGlobalStyle } from "styled-components";
import media from "styled-media-query";
import { Flex, space } from "../config/variables";

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  user-select: none;
  outline: none;
 }

 :root {
        --primary: #ff0096;
        --sec: #121212;
        --text: #f3f3f3;
        --bg: #121212;
        --radius: 20px;
        --baseFg: var(--text);
        --baseBg: var(--sec);
        --accentFg: var(--sec);
        --accentBg: var(--primary);
    }

    body {
      min-height: 100vh;
      background-color: ${({ theme }) => theme.bg};
      color: ${({ theme }) => theme.text};
      font-family: 'Roboto', monospace;
      font-size: 0.9rem;
      letter-spacing: .6px;
    }

    html {
      scroll-behavior: smooth;
      scrollbar-width: thin;
      overflow-x: hidden !important;
      scrollbar-color: var(--primary) ${({ theme }) => theme.text};

  &:focus-within {
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar {
    width: 0.3vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    transition: all 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.bg};
    }
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.text};
  }
}

    a, Link {
      color: ${({ theme }) => theme.text};
      padding: 0.5rem 1rem;
      ${Flex.flexRow}
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
  }

  li{
    list-style: none;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: ${space.mdSpacing} ${space.smSpacing};

  ${media.lessThan("large")`
  padding-inline: ${space.mdSpacing};

  `}
`;

export const Button = styled.button`
  background: ${({ bg }) => (bg ? bg : ({ theme }) => theme.buttonbg)};
  color: ${({ white }) => (white ? "var(--text)" : ({ theme }) => theme.text)};
  white-space: nowrap;
  padding: ${({ pa }) => (pa ? pa : `${space.smSpacing} ${space.mdSpacing}`)};
  font-size: ${({ fontBig }) => (fontBig ? "1rem" : "0.8rem")};
  outline: none;
  border: none;
  text-align: ${({ ta }) => (ta ? "left" : "center")};
  min-width: ${({ mw }) => (mw ? mw : "max-content")};
  text-transform: uppercase;
  border-radius: ${({ rounded }) => (rounded ? `${space.mdSpacing}` : "0px")};
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ sec }) => (sec ? `var(--sec)` : "var(--primary)")};
    color: var(--text);
  }
`;

export default GlobalStyle;
