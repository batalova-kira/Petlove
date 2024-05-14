import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --font-family: "Manrope", sans-serif;
  --font-weight-medium: 500;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;
  --primary-transition: 0.3s ease-in-out;
}

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  /* font-weight: var(--font-weight-medium); */
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.secondBackground};
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}

p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    margin: 0;
    padding: 0;
  }

a {
  text-decoration: none; 
  color: inherit;
  outline: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

 li {
    list-style: none;
  }

  button {
    display: flex;
    margin: 0 auto;
    align-items: center;
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }

textarea {
  resize: none;
}
`;
