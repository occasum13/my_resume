import { SectionInfo, ProjectsInfo, TechInfo, Footer } from "./style"
import { useNavigate } from "react-router";

const Info = () => {
    let navigate = useNavigate()

    const handleClickA = () => {
        navigate("/")
    }

    const handleClickB = () => {
        navigate("/Work")
    }
    
return (
    <>
    <SectionInfo>
            <div className="who--Info">

                <h2>Quem sou eu?</h2>
                <p>Sou um jovem negro de 24 anos, nascido e criado em Curitiba/PR.
                <p>Atualmente estou estudando o curso Fullstack na Kenzie Academy Brasil. </p>
                     Já conquistei meu diploma de Frontend e estou cursando o Backend. 
                     Tive experiências sólidas com Front e Back nos últimos 12 meses.
                </p>
                <p>Sou apaixonado por música, ciclismo, moda, tecnologia e programação.</p>
            </div>

            <h2>Com quais tecnologias trabalho?</h2>

            <TechInfo>

                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JAVASCRIPT ES6</li>
                    <li>REACT.JS</li>
                    <li>NODE.JS</li>
                    <li>API REST</li>
                    <li>EXPRESS</li>
                    <li>TYPESCRIPT</li>
                    <li>POSTGRESQL</li>
                    <li>GITHUB/FLOW</li>
                </ul>

                <ProjectsInfo>

                <h2>Meus projetos</h2>

                <div className="teamProjects--Info">
                    <ul>

                        <li>
                            <h3>GoFresh</h3>
                            <img src={"gofresh.png"} width="250" height="200" title="Projeto Gofresh feito em parceria 
                            com mais 5 devs, onde construimos este lindo website com uma api local 
                            para armazenar dados dos clientes durante a sessão, com função de registro e 
                            login com verificação de dados, menu, perfil e carrinho. 
                            Feito em mobile first com versão para tablets e desktop."></img>
                            <a href="https://vercel.com/occasum13/gofresh-kenzie">vercel link</a>
                        </li>

                        <li>
                            <h3>Ksociety Matrix Arcade</h3>
                            <img src={"ksociety.png"} width="250" height="200" title="Projeto simples 
                            feito em parceria com mais 3 devs onde construimos este site de jogos temátimo
                             de matrix com mobile first e versão para desktop."></img>
                            <a href="https://vercel.com/occasum13/ksociety-kenzie">vercel link</a>
                        </li>

                    </ul>
                    </div>

                    <div className="soloProjects--Info">
                    <ul>

                        <li>
                            <h3>Ricky and Morty API</h3>
                            <img src={"rickyandmortyapi.png"} width="250" height="200" 
                            title="Página simples de personagens do ricky and morty 
                            com cor referente a status de vida e renderização dinâmica 
                            alimentada por uma api remota."></img>
                            <a href="https://vercel.com/occasum13/s1b013">vercel link</a>
                        </li>
                        <li>
                            <h3>Bikeshop 1</h3>
                            <img src={"bikeshop1.png"} width="250" height="200" 
                            title="Página simples de bicicletaria com cálculo de valores e carrinho com opção de remoção + tab de pesquisa feita no react.js usando styled components"></img>
                            <a href="https://vercel.com/occasum13/s3a16">vercel link</a>
                        </li>
                        <li>
                            <h3>Bikeshop 2</h3>
                            <img src={"bikeshop2.png"} width="250" height="200" 
                            title="Outra versão da bicicletaria com carrinho e estética diferentes juntamente com pop ups."></img>
                            <a href="https://vercel.com/occasum13/s3b05">vercel link</a>
                        </li>
                    </ul>
                    </div>
                    

                    
                </ProjectsInfo>
            </TechInfo>
            <Footer>
            <button className="buttonA" onClick={handleClickA}>Home</button>
            <a href="https://github.com/occasum13">github</a>
            <button className="buttonB" onClick={handleClickB}>Contatos</button>
            </Footer>

    </SectionInfo>
    </>
)
}

export default Info