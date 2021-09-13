import styled from "styled-components";

export const TopBoxTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const MyHabitsTitle = styled.span`
    color: #126BA5;
    font-size: 23px;
`
export const AddHabitButton = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 4.5px;
    font-size: 27px;
    color: #ffffff;
    font-weight: bold;

    :active {
	    transform:  translateY(5px);
    }
`
export const AddHabitCard = styled.div`
    height: 180px;
    background-color: #ffffff;
    padding: 18px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 20px;
    pointer-events: ${props => props.loading ? "none" : "auto"};
`
export const HabitNameInput = styled.input`
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
export const WeekDays = styled.div`
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
export const WeekDay = styled.button`
    background-color: #ffffff;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #D5D5D5;
    font-size: 20px;
`
export const CancelSaveButtons = styled.div`
    margin-top: 29px;
    display: flex;
    justify-content: flex-end;
    opacity: ${props => props.loading ? "0.5" : "1"};
`
export const CancelButton = styled.button`
    background-color: #ffffff;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: #52B6FF;
    margin-right: 16px;

    :active {
	    transform:  translateY(5px);
    }
`
export const SaveButton = styled.button`
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
    
    :active {
	    transform:  translateY(5px);
    }
`
export const HabitCardsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0;
`
export const HabitCard = styled.li`
    display: flex;
    flex-direction: column;
    padding: 14px;
    background-color: #ffffff;
    border-radius: 5px;
`
export const HabitNameAndTrashBinBox = styled.div`
    display: flex;
    justify-content: space-between;

    .trash-bin {
        font-size: 20px;
        color: #666666;

        :active {
	        transform:  translateY(5px);
        }
    }
`
export const HabitName = styled.h1`
    font-size: 20px;
    color: #666666;
    line-height: 25px;
`
export const NotAHabitYet = styled.p`
    font-size: 18px;
    color: #666666;
    line-height: 22px;
    margin: 30px 0;
`