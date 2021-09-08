import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Habits () {
    return (
        <main>
            <$TopBoxTitle>
                <$MyHabitsTitle>
                    Meus hábitos
                </$MyHabitsTitle>
                <$AddHabitButton>
                    +
                </$AddHabitButton>
            </$TopBoxTitle>
            <$NotAHabitYet>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </$NotAHabitYet>
        
        
        
        
        </main>
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
const $NotAHabitYet = styled.p`
    font-size: 18px;
    color: #666666;
    line-height: 22px;
    margin-top: 30px;
`
