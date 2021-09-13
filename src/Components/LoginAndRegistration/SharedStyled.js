import styled from "styled-components";

const InicializationContainer = styled.div`
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
const TrackItLogo = styled.img`
    width: 180px;
    margin-top: 68px;
`
const InputsAndButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 45px;
`
const InicializationInput = styled.input`
    width: 303px;
    height: 45px;
    outline: none;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    font-size: 20px;
    pointer-events: ${props => props.loading ? "none" : "auto"};
    background-color: ${props => props.loading ? "#F2F2F2" : "#ffffff"};
    opacity: ${props => props.loading ? "0.5" : "1"};

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`
const MainButton = styled.button`
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
    border: none;
    pointer-events: ${props => props.loading ? "none" : "auto"};
    opacity: ${props => props.loading ? "0.5" : "1"};
`
export {
    InicializationContainer,
    TrackItLogo,
    InputsAndButtonContainer,
    InicializationInput,
    MainButton
}