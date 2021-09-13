import { Link } from "react-router-dom";
import { sendLogin } from "../../API";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Loader from "react-loader-spinner";
import {InicializationContainer,
    TrackItLogo,
    InputsAndButtonContainer,
    InicializationInput,
    MainButton} from "./SharedStyled";

export default function Login ({ getUserInfo }) {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const login = () => {
        const body = {
            email,
            password
        }
        sendLogin(body).then(res => {
            getUserInfo(res.data);
            history.push("/today");            
        }).catch(err => {
            setLoading(false);
            alert("Seu login não foi efetuado! Por favor, altere os campos e tente novamente.")
        })
        setLoading(true);
    }

    return (
        <InicializationContainer>
            <TrackItLogo src="./images/trackit-logo.png" alt=""/>
            <InputsAndButtonContainer>
                <InicializationInput loading={loading} placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <InicializationInput loading={loading} type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <MainButton loading={loading} onClick={login}>{loading ? (<Loader type="ThreeDots" color="#ffffff" width={51} height={51}/>) : "Entrar"}</MainButton>
            </InputsAndButtonContainer>
            <Link to="/registration" className="register-or-Login-link">Não tem uma conta? Cadastre-se!</Link>
        </InicializationContainer>
    )
}