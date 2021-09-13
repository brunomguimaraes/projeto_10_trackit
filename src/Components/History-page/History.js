import styled from "styled-components";
import HeaderFooter from "../HeaderFooter";

export default function History () {
    return (
        <>
            <HeaderFooter />
            <main>
                <HistoryTitle>
                    Histórico
                </HistoryTitle>
                <SoonMessage>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </SoonMessage>
                <SuperSecretContainer>
                    <>
                        <Gandalf src="./images/you-shall-not-pass.gif"></Gandalf>
                        <NotYet>Ainda não!</NotYet>
                    </>
                    <SuperSecretButton>
                        Pressione para ver o conteúdo super secreto
                    </SuperSecretButton>
                </SuperSecretContainer>
            </main>
        </>
    )
}

const HistoryTitle = styled.h1`
    color: #126BA5;
    font-size: 23px;
    margin-bottom: 17px;
`
const SoonMessage = styled.p`
    line-height: 22px;
    color: #666666;
    font-size: 18px;
`
const SuperSecretContainer = styled.div`
    margin-top: 100px;
    height: 300px;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SuperSecretButton = styled.button`
    background-color: #ffffff;
    border: 2px solid #666666;
    padding: 30px;
    width: calc(100% - 30px);
    height: 300px;
    font-size: 50px;
    border-radius: 5px;
    color: #126BA5;
    box-shadow: 0px 0px 10px 2px #bcb8b8;
    font-family: 'Bilbo', cursive;
    position: fixed;
    transition: all 1s ease-in;

    :active {
        transform: translateY(300px);
        background-color: #126BA5;
        color: #ffffff;
        width: 100px;
        height: 100px;
        font-size: 20px;
        padding: 5px;
    }
`
const Gandalf = styled.img`
    width: 100%;
`
const NotYet = styled.span`
    font-size: 50px;
    color: #000000;
    margin-top: 50px;
    font-family: 'Bilbo', cursive;
`