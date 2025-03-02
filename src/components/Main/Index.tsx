import { GlobalMain } from "../../shared/GlobalStyle";
import ButtonMain from "../Buttom/Index";
import { ContainerBotao, ContainerConteudo, ContainerTexto, ContainerTitulo, Section } from "./style";

export default function Main(){
    
 
    return (<>
      
      <GlobalMain>
        <Section>
          <ContainerTitulo>
            <h1>Bem vindo ao EstimaPoker</h1>
          </ContainerTitulo>
          <ContainerConteudo>
            <ContainerTexto>
              <p>EstimaPoker é sua solução perfeita para projetos Ágeis! Simplifique a estimativa de tarefas e fortaleça a colaboração da sua equipe.</p>
            </ContainerTexto>
            <ContainerBotao>
              <ButtonMain text="Entrar em sala Existente" bgColor="#000" color="#fff"></ButtonMain>
            </ContainerBotao>
          </ContainerConteudo>
        </Section>
      </GlobalMain>
    </>
    );
  }
