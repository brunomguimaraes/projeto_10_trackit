import styled from "styled-components";

export const WeekDay = styled.h1`
    font-size: 23px;
    color: #126BA5;
    line-height: 29px;
`
export const HabitsConcludedQty = styled.h2`
    font-size: 18px;
    color: #BABABA;
    line-height: 23px;
`
export const TodayCardsList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 28px 0;
    gap: 10px;
`
export const TodayCard = styled.li`
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
export const TodayTaskContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const Task = styled.h1`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
`
export const Sequence = styled.span`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
`
export const Record = styled.span`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
`
export const CheckButton = styled.button`
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