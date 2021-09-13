import styled from "styled-components";
import HeaderFooter from "./HeaderFooter";
import { IoCheckmarkSharp } from "react-icons/io5"
import { getTodayHabits, sendHabitDone, sendHabitUndone } from "../API";
import UserContext from './UserContext';
import { useEffect, useContext, useState } from "react";
import dayjs from "dayjs";

export default function Today ({ getPercentage }) {

    let today = dayjs().$d;
    let weekday = String(today).split(" ")[0] ;
    let month = String(today).split(" ")[1] ;
    let day = String(today).split(" ")[2] ;
    const loginInfo = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    const config = {
        headers: {
            Authorization: `Bearer ${loginInfo.token}`
        }
    }
    const concludedLength = [...todayHabits].filter(habit => habit.done === true).length;
    const percentage = ((concludedLength/todayHabits.length)*100).toFixed(0);
    getPercentage(percentage);

    useEffect(() => {
        renderizeTodayHabits();
    },[])

    const renderizeTodayHabits = () => {
        getTodayHabits(config).then(res => {
            setTodayHabits(res.data);
        })
    }

    const toggleCheck = (todayHabit) => {
        if (todayHabit.done) {
            sendHabitUndone(todayHabit.id, config).then(res => {
                renderizeTodayHabits();
            })
        } else {
            sendHabitDone(todayHabit.id, config).then(res => {
                renderizeTodayHabits();
            })
        }
    }

    return (
        <>
            <HeaderFooter />
            <main>            
                <div>
                    <WeekDay>
                        {weekday}, {day}/{month}
                    </WeekDay>

                    <HabitsConcludedQty>
                        {percentage === "0" ? "Nenhum hábito concluído ainda" : percentage === "100" ? "Parabéns! Você concluiu todos os seus hábitos de hoje" : `${percentage}% dos hábitos concluídos`}
                    </HabitsConcludedQty>
                </div>
                {todayHabits.length !== 0 ? (
                    <TodayCardsList>
                        {todayHabits.map((todayHabit, i) => 
                        <TodayCard id={todayHabit.id} key={i}>
                            <TodayTaskContent>
                                <Task>
                                    {todayHabit.name}
                                </Task>
                                <Sequence className={todayHabit.done ? "highlighted-sequence" : ""}>Sequência atual: {todayHabit.currentSequence} dia(s)</Sequence>
                                <Record className={todayHabit.done && todayHabit.currentSequence === todayHabit.highestSequence ? "highlighted-sequence" : ""}>Seu recorde: {todayHabit.highestSequence} dia(s)</Record>                
                            </TodayTaskContent>

                            <CheckButton className={todayHabit.done ? "selected" : ""}>
                                <IoCheckmarkSharp className="check-mark" onClick={() => toggleCheck(todayHabit)}/>
                            </CheckButton>
                        </TodayCard>)}
                    </TodayCardsList>
                ) : (<></>)}
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
    border-radius: 5px;

    .selected {
        background-color: #8FC549;
    }

    .highlighted-sequence {
        color: #8FC549;
    }
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