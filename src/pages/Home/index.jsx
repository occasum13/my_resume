import { useNavigate } from "react-router";
import { DivHomeIntro, SectionHome } from "./style";
const Home = () => {
    let navigate = useNavigate()

    const handleClick = () => {
        navigate("info")
    }
    return (
        <>
        <SectionHome>
        <DivHomeIntro>
        <p>Olá, sou</p>
        <h1>João Gayer</h1>
        <h2>Desenvolvedor Web Frontend.</h2>
        </DivHomeIntro>
        <button onClick={handleClick}></button>
        </SectionHome>
        </>
    )

}

export default Home