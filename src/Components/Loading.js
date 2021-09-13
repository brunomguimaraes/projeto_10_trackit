import styled from 'styled-components';
import Loader from "react-loader-spinner";

export default function Loading () {
    return (
        <LoadingPage>
            <Loader type="ThreeDots" color="#52B6FF" width={130} height={130}/>
        </LoadingPage>
    )
}

const LoadingPage = styled.div`
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
`