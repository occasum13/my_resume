import { useNavigate } from "react-router"
import { SectionWork, Footer } from "./style"

const Work = () => {
    let navigate = useNavigate()

    const handleClickA = () => {
        navigate("/")
    }

    const handleClickB = () => {
        navigate("/info")
    }
    
    return (
        <>
        <SectionWork>
            <div className="availability--work">
                <p>Estou atualmente disponível para trabalhar.</p>
                <p>Falo fluentemente inglês e português.</p>
                <p>Estou procurando tanto trabalhos em meio período quanto em tempo integral. </p>
                <p>Tenho equipamento e internet de alta velocidade para começar a trabalhar hoje.</p>
            </div>
            <div className="contacts--work">
                <p>Você pode me contatar em meu número pessoal ou via E-mail.</p>
                <p>(41) 9-9834-7117</p>
                <p>jpassissgayer@gmail.com</p>
            </div>
            <div className="navigate--work">

            </div>
            <Footer>
            <button className="buttonA" onClick={handleClickA}>Home</button>
            <button className="buttonB" onClick={handleClickB}>Portfólio</button>
            </Footer>
        </SectionWork>
        
        </>
    )
}

export default Work