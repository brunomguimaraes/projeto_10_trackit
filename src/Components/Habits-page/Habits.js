import HeaderFooter from "../HeaderFooter";
import { IoTrashOutline } from "react-icons/io5"
import { useEffect, useContext, useState } from "react";
import { getHabits, sendNewHabit, deleteHabit } from "../../API";
import UserContext from '../../Contexts/UserContext';
import Loader from "react-loader-spinner";
import Loading from "../Loading";
import { TopBoxTitle, MyHabitsTitle, AddHabitButton, AddHabitCard, HabitNameInput, WeekDays, WeekDay, CancelSaveButtons, CancelButton, SaveButton, HabitCardsList, HabitCard, HabitNameAndTrashBinBox, HabitName, NotAHabitYet } from "./HabitsStyled";

export default function Habits () {

    const loginInfo = useContext(UserContext);
    const [habits, setHabits] = useState(null);
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
        }).catch(err => {
            alert("Não foi possível carregar os hábitos do servidor!");
        })
    },[])

    if (habits === null) {
        return (
            <>
                <HeaderFooter />
                <main>
                    <Loading />
                </main>
            </>
        )
    }

    const createNewHabit = () => {
        if (newHabitName === "") {
            alert("Por favor, insira o título de seu hábito.");
            return;
        } else if (newHabitName.replace(/\s/g, '').length === 0) {
            alert("O título de seu hábito não deve conter apenas espaços vazios!");
            return;
        } else if (newHabitDays.length === 0) {
            alert("Por favor, defina pelo menos 1 dia para seu hábito.");
            return;
        }
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
            alert("Não foi possível criar o hábito! Por favor, altere os campos e tente novamente.");
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
                                        <WeekDay key={i} id={i} onClick={e => toggleNewDay(e)} className={newHabitDays.includes(i) ? "selected" : ""}>{weekday}</WeekDay>
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
                                        <WeekDay key={i} id={i} className={habit.days.includes(i) ? "selected" : ""}>{weekday}</WeekDay>
                                    )}
                                </WeekDays>
                            </HabitCard>)}
                        </HabitCardsList>
                    ) : (<></>)}
            </main>
        </>
    )
}