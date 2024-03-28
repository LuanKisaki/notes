import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
    padding: 4px 6px;
    border-radius: 5px;
    border: none;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

      /* width */
::-webkit-scrollbar {
  width: .5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: ${ ( { theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;
  margin: 8px 0;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${( { theme }) => theme.COLORS.ORANGE_BAR}; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${( { theme }) => theme.COLORS.ORANGE};  
}
`;
