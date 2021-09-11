import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderFooter from "./HeaderFooter";
import { IoTrashOutline } from "react-icons/io5"
import { useEffect, useContext, useState } from "react";
import { getHabits, sendNewHabit, deleteHabit } from "../API";
import UserContext from './UserContext';

export default function Habits () {

    const loginInfo = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [newHabitName, setNewHabitName] = useState("");
    const [newHabitDays, setNewHabitDays] = useState([]);
    const config = {
        headers: {
            Authorization: `Bearer ${loginInfo.token}`
        }
    }
    console.log(newHabitDays);
    console.log(config);

    useEffect(() => {

        getHabits(config).then(res => {
            setHabits(res.data);
            console.log(res.data);
        })

    },[])

    const createNewHabit = () => {
        const body = {
            name: newHabitName,
            days: newHabitDays
        }
        sendNewHabit(body, config).then(res => {
            setHabits([...habits, res.data])
            setNewHabitName("");
            setNewHabitDays([]);
        })
    }

    const toggleNewDay = (e) => {
        if (newHabitDays.includes(Number(e.target.id))) {
            const removedIdlist = newHabitDays.filter(dayId => 
                dayId !== Number(e.target.id)
            )
            setNewHabitDays(removedIdlist);
        } else {
            setNewHabitDays([...newHabitDays, Number(e.target.id)])
        }
    }

    const removeHabit = (habitId) => {
        const deleteOrNot = window.confirm("Você quer mesmo deletar este hábito?");
        if (deleteOrNot) {
            deleteHabit(habitId, config).then((res) => {
                const removedHabitList = habits.filter(habit => 
                    habit.id !== habitId    
                )
                setHabits(removedHabitList);
                console.log(res.data)
            })
        }
    }


    return (
        <>
            <HeaderFooter />
            <main>
                <TopBoxTitle>
                    <MyHabitsTitle>
                        Meus hábitos
                    </MyHabitsTitle>
                    <AddHabitButton>
                        +
                    </AddHabitButton>
                </TopBoxTitle>

                <HabitCardsList>
                    {habits.length === 0 ? (
                        <>
                            <AddHabitCard>
                                <HabitNameInput placeholder="nome do hábito" value={newHabitName} onChange={e => setNewHabitName(e.target.value)}/>
                                <WeekDays>
                                    <WeekDay id={1} onClick={e => toggleNewDay(e)}>S</WeekDay>
                                    <WeekDay id={2} onClick={e => toggleNewDay(e)}>T</WeekDay>
                                    <WeekDay id={3} onClick={e => toggleNewDay(e)}>Q</WeekDay>
                                    <WeekDay id={4} onClick={e => toggleNewDay(e)}>Q</WeekDay>
                                    <WeekDay id={5} onClick={e => toggleNewDay(e)}>S</WeekDay>
                                    <WeekDay id={6} onClick={e => toggleNewDay(e)}>S</WeekDay>
                                    <WeekDay id={7} onClick={e => toggleNewDay(e)}>D</WeekDay>
                                </WeekDays>
                                <CancelSaveButtons>
                                    <CancelButton>Cancelar</CancelButton>
                                    <SaveButton onClick={createNewHabit}>Salvar</SaveButton>
                                </CancelSaveButtons>
                            </AddHabitCard>
                            <NotAHabitYet>
                                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                            </NotAHabitYet>
                        </>
                    ) : (
                        habits.map((habit, i) => 
                            <HabitCard id={habit.id} key={i}>
                                <HabitNameAndTrashBinBox>
                                    <HabitName>{habit.name}</HabitName>
                                    <IoTrashOutline className="trash-bin" onClick={() => removeHabit(habit.id)}/>
                                </HabitNameAndTrashBinBox>
                                <WeekDays>
                                    <WeekDay>S</WeekDay>
                                    <WeekDay>T</WeekDay>
                                    <WeekDay>Q</WeekDay>
                                    <WeekDay>Q</WeekDay>
                                    <WeekDay>S</WeekDay>
                                    <WeekDay>S</WeekDay>
                                    <WeekDay>D</WeekDay>
                                </WeekDays>
                            </HabitCard>)
                    )}
                </HabitCardsList>
            </main>
        </>
    )
}

const TopBoxTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const MyHabitsTitle = styled.span`
    color: #126BA5;
    font-size: 23px;
`
const AddHabitButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 4.5px;
    font-size: 27px;
    color: #ffffff;
    font-weight: bold;
`
const AddHabitCard = styled.div`
    height: 180px;
    background-color: #ffffff;
    padding: 18px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 20px;
`
const HabitNameInput = styled.input`
    height: 45px;
    outline: none;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    font-size: 20px;

    ::placeholder {
        font-size: 20px;
        color: #DBDBDB;
    }
`
const WeekDays = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-top: 8px;
`
const WeekDay = styled.button`
    background-color: #ffffff;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #D5D5D5;
    font-size: 20px;
`
const CancelSaveButtons = styled.div`
    margin-top: 29px;
    text-align: right;
`
const CancelButton = styled.button`
    background-color: #ffffff;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: #52B6FF;
    margin-right: 16px;
`
const SaveButton = styled.button`
    background-color: #52B6FF;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: #ffffff;
`
const HabitCardsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0;
`
const HabitCard = styled.li`
    display: flex;
    flex-direction: column;
    padding: 14px;
    background-color: #ffffff;
    border-radius: 5px;
`
const HabitNameAndTrashBinBox = styled.div`
    display: flex;
    justify-content: space-between;

    .trash-bin {
        font-size: 20px;
        color: #666666;
    }
`
const HabitName = styled.h1`
    font-size: 20px;
    color: #666666;
    line-height: 25px;
`
const NotAHabitYet = styled.p`
    font-size: 18px;
    color: #666666;
    line-height: 22px;
    margin: 30px 0;
`