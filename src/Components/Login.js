import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login () {
    return (
        <$InicializationContainer>
            <$TrackItLogo src="./images/trackit-logo.png" alt=""/>
            <$InputsAndButtonContainer>
                <$InicializationInput placeholder="email"></$InicializationInput>
                <$InicializationInput placeholder="senha"></$InicializationInput>
                <$InicializationInput placeholder="nome"></$InicializationInput>
                <$InicializationInput placeholder="foto"></$InicializationInput>
                <Link to="" className="inicialization-link">Entrar</Link>
            </$InputsAndButtonContainer>
            <Link to="" className="register-or-Login-link">Não tem uma conta? Cadastre-se!</Link>
        </$InicializationContainer>
    )
}

const $InicializationContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .register-or-Login-link {
        font-size: 14px;
        line-height: 17px;
        color: #52B6FF;
        margin-top: 25px;
    }
`
const $TrackItLogo = styled.img`
    width: 180px;
    margin-top: 68px;
`
const $InputsAndButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 45px;

    .inicialization-link {
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
        font-size: 21px;
        color: #ffffff;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const $InicializationInput = styled.input`
    width: 303px;
    height: 45px;
    outline: none;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`