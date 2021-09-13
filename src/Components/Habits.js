import styled from "styled-components";
import HeaderFooter from "./HeaderFooter";
import { IoTrashOutline } from "react-icons/io5"
import { useEffect, useContext, useState } from "react";
import { getHabits, sendNewHabit, deleteHabit } from "../API";
import UserContext from './UserContext';
import Loader from "react-loader-spinner";

export default function Habits () {

    const loginInfo = useContext(UserContext);
    const [habits, setHabits] = useState([]);
    const [newHabitName, setNewHabitName] = useState("");
    const [newHabitDays, setNewHabitDays] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const config = {
        headers: {
            Authorization: `Bearer ${loginInfo.token}`
        }
    }

    useEffect(() => {
        getHabits(config).then(res => {
            setHabits(res.data);
        })
    },[])

    const createNewHabit = () => {
        const body = {
            name: newHabitName,
            days: newHabitDays
        }
        sendNewHabit(body, config).then(res => {
            setLoading(false);
            setHabits([...habits, res.data])
            setNewHabitName("");
            setNewHabitDays([]);
            setClicked(false);
        }).catch(err => {
            setLoading(false);
            setNewHabitName("");
            setNewHabitDays([]);
            alert("Não foi possível criar o hábito!");
        })
        setLoading(true);
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
                    <AddHabitButton onClick={() => setClicked(true)}>
                        +
                    </AddHabitButton>
                </TopBoxTitle>
                    {habits.length === 0 || clicked ? (
                        <>
                            <AddHabitCard loading={loading}>
                                <HabitNameInput placeholder="nome do hábito" value={newHabitName} onChange={e => setNewHabitName(e.target.value)} loading={loading}/>
                                <WeekDays loading={loading}>
                                    {weekdays.map((weekday, i) =>                                     
                                        <WeekDay id={i} onClick={e => toggleNewDay(e)} className={newHabitDays.includes(i) ? "selected" : ""}>{weekday}</WeekDay>
                                    )}
                                </WeekDays>
                                <CancelSaveButtons loading={loading}>
                                    <CancelButton onClick={() => setClicked(false)}>Cancelar</CancelButton>
                                    <SaveButton onClick={createNewHabit} loading={loading}>{loading ? (<Loader type="ThreeDots" color="#ffffff" width={42} height={42}/>) : "Salvar"}</SaveButton>
                                </CancelSaveButtons>
                            </AddHabitCard>
                        </>
                    ) : (<></>)}
                    {habits.length === 0 ? (
                            <NotAHabitYet>
                                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                            </NotAHabitYet>
                    ) : (<></>)}
                    {habits.length !== 0 ? (    
                        <HabitCardsList>
                            {habits.map((habit, i) => 
                            <HabitCard id={habit.id} key={i}>
                                <HabitNameAndTrashBinBox>
                                    <HabitName>{habit.name}</HabitName>
                                    <IoTrashOutline className="trash-bin" onClick={() => removeHabit(habit.id)}/>
                                </HabitNameAndTrashBinBox>
                                <WeekDays>
                                    {weekdays.map((weekday, i) => 
                                        <WeekDay id={i} className={habit.days.includes(i) ? "selected" : ""}>{weekday}</WeekDay>
                                    )}
                                </WeekDays>
                            </HabitCard>)}
                        </HabitCardsList>
                    ) : (<></>)}
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
    pointer-events: ${props => props.loading ? "none" : "auto"};
`
const HabitNameInput = styled.input`
    height: 45px;
    outline: none;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    font-size: 20px;
    opacity: ${props => props.loading ? "0.5" : "1"};
    background-color: ${props => props.loading ? "#F2F2F2" : "#ffffff"};

    ::placeholder {
        font-size: 20px;
        color: ${props => props.loading ? "#B3B3B3" : "#DBDBDB"};
    }
`
const WeekDays = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-top: 8px;
    opacity: ${props => props.loading ? "0.5" : "1"};

    .selected {
        background-color: #CFCFCF;
        color: #ffffff;
    }
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
    display: flex;
    justify-content: flex-end;
    opacity: ${props => props.loading ? "0.5" : "1"};
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
    display: flex;
    justify-content: center;
    align-items: center;
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