import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderFooter from "./HeaderFooter";
import { IoTrashOutline } from "react-icons/io5"


export default function Habits () {
    return (
        <>
            <HeaderFooter />
            <main>

                <$TopBoxTitle>
                    <$MyHabitsTitle>
                        Meus hábitos
                    </$MyHabitsTitle>
                    <$AddHabitButton>
                        +
                    </$AddHabitButton>
                </$TopBoxTitle>

                <$AddHabitCard>
                
                    <$HabitNameInput placeholder="nome do hábito">
                    </$HabitNameInput>

                    <$WeekDays>
                        <$WeekDay>S</$WeekDay>
                        <$WeekDay>T</$WeekDay>
                        <$WeekDay>Q</$WeekDay>
                        <$WeekDay>Q</$WeekDay>
                        <$WeekDay>S</$WeekDay>
                        <$WeekDay>S</$WeekDay>
                        <$WeekDay>D</$WeekDay>
                    </$WeekDays>

                    <$CancelSaveButtons>

                        <$CancelButton>Cancelar</$CancelButton>
                        <$SaveButton>Salvar</$SaveButton>

                    </$CancelSaveButtons>
                
                </$AddHabitCard>

                <$HabitCardsList>

                    <$HabitCard>

                        <$HabitNameAndTrashBinBox>
                            <$HabitName>Ler 1 capítulo de livro</$HabitName>
                            <IoTrashOutline className="trash-bin" />
                        
                        </$HabitNameAndTrashBinBox>

                        <$WeekDays>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>T</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>D</$WeekDay>
                        </$WeekDays>

                    </$HabitCard>

                    <$HabitCard>

                        <$HabitNameAndTrashBinBox>
                            <$HabitName>Ler 1 capítulo de livro</$HabitName>
                            <IoTrashOutline className="trash-bin" />
                        
                        </$HabitNameAndTrashBinBox>

                        <$WeekDays>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>T</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>D</$WeekDay>
                        </$WeekDays>

                    </$HabitCard>
                    <$HabitCard>

                        <$HabitNameAndTrashBinBox>
                            <$HabitName>Ler 1 capítulo de livro</$HabitName>
                            <IoTrashOutline className="trash-bin" />
                        
                        </$HabitNameAndTrashBinBox>

                        <$WeekDays>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>T</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>D</$WeekDay>
                        </$WeekDays>

                    </$HabitCard>
                    <$HabitCard>

                        <$HabitNameAndTrashBinBox>
                            <$HabitName>Ler 1 capítulo de livro</$HabitName>
                            <IoTrashOutline className="trash-bin" />
                        
                        </$HabitNameAndTrashBinBox>

                        <$WeekDays>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>T</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>D</$WeekDay>
                        </$WeekDays>

                    </$HabitCard>
                    <$HabitCard>

                        <$HabitNameAndTrashBinBox>
                            <$HabitName>Ler 1 capítulo de livro</$HabitName>
                            <IoTrashOutline className="trash-bin" />
                        
                        </$HabitNameAndTrashBinBox>

                        <$WeekDays>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>T</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>Q</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>S</$WeekDay>
                            <$WeekDay>D</$WeekDay>
                        </$WeekDays>

                    </$HabitCard>

                    </$HabitCardsList>

                <$NotAHabitYet>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </$NotAHabitYet>
            
            
            
            
            </main>
        </>
    )
}

const $TopBoxTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const $MyHabitsTitle = styled.span`
    color: #126BA5;
    font-size: 23px;
`
const $AddHabitButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 4.5px;
    font-size: 27px;
    color: #ffffff;
    font-weight: bold;
`
const $AddHabitCard = styled.div`
    height: 180px;
    background-color: #ffffff;
    padding: 18px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 20px;
`
const $HabitNameInput = styled.input`
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
const $WeekDays = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-top: 8px;
`
const $WeekDay = styled.button`
    background-color: #ffffff;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #D5D5D5;
    font-size: 20px;
`
const $CancelSaveButtons = styled.div`
    margin-top: 29px;
    text-align: right;
`
const $CancelButton = styled.button`
    background-color: #ffffff;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: #52B6FF;
    margin-right: 16px;
`
const $SaveButton = styled.button`
    background-color: #52B6FF;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: #ffffff;
`
const $HabitCardsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0;
`
const $HabitCard = styled.li`
    display: flex;
    flex-direction: column;
    padding: 14px;
    background-color: #ffffff;
    border-radius: 5px;
`
const $HabitNameAndTrashBinBox = styled.div`
    display: flex;
    justify-content: space-between;

    .trash-bin {
        font-size: 20px;
        color: #666666;
    }
`
const $HabitName = styled.h1`
    font-size: 20px;
    color: #666666;
    line-height: 25px;
`
const $NotAHabitYet = styled.p`
    font-size: 18px;
    color: #666666;
    line-height: 22px;
    margin: 30px 0;
`