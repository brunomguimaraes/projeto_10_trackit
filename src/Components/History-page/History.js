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