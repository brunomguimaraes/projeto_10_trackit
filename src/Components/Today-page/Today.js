import HeaderFooter from "../HeaderFooter";
import { IoCheckmarkSharp } from "react-icons/io5"
import { getTodayHabits, sendHabitDone, sendHabitUndone } from "../../API";
import UserContext from '../../Contexts/UserContext';
import { useEffect, useContext, useState } from "react";
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Loading from "../Loading";
import { WeekDay, HabitsConcludedQty, TodayCardsList, TodayCard, TodayTaskContent, Task, Sequence, Record, CheckButton } from "./TodayStyled"

export default function Today ({ getPercentage }) {

    const loginInfo = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState(null);
    let concludedLength;
    let percentage;
    const config = {
        headers: {
            Authorization: `Bearer ${loginInfo.token}`
        }
    }

    const renderizeTodayHabits = () => {
        getTodayHabits(config).then(res => {
            setTodayHabits(res.data);
        }).catch(err => {
            alert("Não foi possível carregar os hábitos de hoje do servidor!");
        })
    }

    useEffect(() => {
        renderizeTodayHabits();
    },[])

    if (todayHabits === null) {
        return (
            <>
                <HeaderFooter />
                <main>
                    <Loading />
                </main>
            </>
        )
    }

    const calculateHabitsDonePercentage = () => {
        concludedLength = [...todayHabits].filter(habit => habit.done === true).length;
        percentage = ((concludedLength/todayHabits.length)*100).toFixed(0);
        getPercentage(percentage);
    }
    calculateHabitsDonePercentage();

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
                        {dayjs().locale('pt-br').format(`dddd, DD/MM`)}
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