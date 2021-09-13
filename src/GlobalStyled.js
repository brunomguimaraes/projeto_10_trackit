import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    #root {
        font-family: 'Lexend Deca', sans-serif;
    }
    main {
        margin: 70px 0;
        background-color: #F2F2F2;
        padding: 22px 18px;
        min-height: calc(100vh - 140px);
    }
`
export default GlobalStyle;