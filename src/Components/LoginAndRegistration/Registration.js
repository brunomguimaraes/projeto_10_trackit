import { Link } from "react-router-dom";
import { sendRegistration } from "../../API";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import {InicializationContainer,
    TrackItLogo,
    InputsAndButtonContainer,
    InicializationInput,
    MainButton} from "./SharedStyled";

export default function Login () {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const register = () => {
        const body = {
            email,
            name,
            image,
            password
        }
        sendRegistration(body)
        .then(res => {
            history.push("/")
        }).catch(err => {
            setLoading(false);
            if (err.response.status === 409) {
                alert("Já existe um usuário cadastrado com essas informações!");
            } else {
                alert("Seu registro não foi efetuado! Por favor, tente novamente.")
            }
        })
        setLoading(true);
    }

    return (
        <InicializationContainer>
            <TrackItLogo src="./images/trackit-logo.png" alt=""/>
            <InputsAndButtonContainer>
                <InicializationInput loading={loading} placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <InicializationInput loading={loading} type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                <InicializationInput loading={loading} placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
                <InicializationInput loading={loading} placeholder="foto" value={image} onChange={e => setImage(e.target.value)} />
                <MainButton loading={loading} onClick={register}>{loading ? (<Loader type="ThreeDots" color="#ffffff" width={51} height={51}/>) : "Cadastrar"}</MainButton>
            </InputsAndButtonContainer>
            <Link to="/" className="register-or-Login-link">Já tem uma conta? Faça login!</Link>
        </InicializationContainer>
    )
}