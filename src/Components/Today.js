import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderFooter from "./HeaderFooter";
import { IoCheckmarkSharp } from "react-icons/io5"


export default function Today () {
    return (

        <>
            <HeaderFooter />
            <main>            
                <div>
                    <WeekDay>
                        Segunda, 17/05
                    </WeekDay>
                    <HabitsConcludedQty>
                        Nenhum hábito concluído ainda
                    </HabitsConcludedQty>
                </div>

                <TodayCardsList>
                
                    <TodayCard>

                        <TodayTaskContent>
                            <Task>
                                Ler 1 capítulo de livro
                            </Task>
                            <Sequence>Sequência atual: 3 dias</Sequence>
                            <Record>Seu recorde: 5 dias</Record>                
                        </TodayTaskContent>

                        <CheckButton>
                            <IoCheckmarkSharp className="check-mark" />
                        </CheckButton>

                    </TodayCard>
                
                </TodayCardsList>


            </main>
        </>
    )

}

const WeekDay = styled.h1`
    font-size: 23px;
    color: #126BA5;
    line-height: 29px;
`
const HabitsConcludedQty = styled.h2`
    font-size: 18px;
    color: #BABABA;
    line-height: 23px;
`
const TodayCardsList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 28px 0;
    gap: 10px;
`
const TodayCard = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 13px;
    background-color: #ffffff;
`
const TodayTaskContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Task = styled.h1`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
`
const Sequence = styled.span`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
`
const Record = styled.span`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
`
const CheckButton = styled.button`
    background-color: #EBEBEB;
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: none;

    .check-mark {
        font-size: 50px;
        color: #ffffff;
        font-weight: bold;
    }
`