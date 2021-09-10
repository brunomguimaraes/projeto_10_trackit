import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function HeaderFooter () {

    const percentage = 66;

    return (
        <>
            <$Navbar>
                <$TrackItLogoTitle>TrackIt</$TrackItLogoTitle>
                <$UserName>Pedro Mafra</$UserName>
                <$ProfilePictureContainer />
            </$Navbar>

            <$BottomBar>
                <Link to="" className="to-habits-history-link">Hábitos</Link>
                <Link to="">
                    <CircularProgressbar 
                        className="circular-bar" 
                        value={percentage} text="Hoje" 
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                        background
                        backgroundPadding={6}>
                    </CircularProgressbar>
                </Link>
                <Link to="" className="to-habits-history-link">Histórico</Link>
            </$BottomBar>
        </>
    )
}

const $Navbar = styled.div`
    background-color: #126BA5;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
`
const $TrackItLogoTitle = styled.span`
    font-family: 'Playball', cursive;
    color: #ffffff;
    font-size: 39px;
`
const $UserName = styled.span`
    width: 120px;
    height: 50px;
    margin-left: 40px;
    font-size: 16px;
    color: #ffffff;
    overflow: hidden;
    display: flex;
    align-items: center;
`
const $ProfilePictureContainer = styled.div`
    background-color: cyan;
    height: 51px;
    width: 51px;
    border-radius: 98px;
    background-image: url("./images/trackit-logo.png");
    background-size: 100%;
`
const $BottomBar = styled.div`
    background-color: #ffffff;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 36px;

    .to-habits-history-link {
        color: #52B6FF;
        font-size: 18px;
        text-decoration: none;
    }
    .circular-bar {
        width: 91px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -50%);
    }
`