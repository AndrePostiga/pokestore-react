import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #333;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
    padding: 0 0px 50px;

    @media (max-width: 900px) {
      padding: 0 0px 10px;
    }
  }

  button {
    cursor: pointer;
  }
`;
