import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SkillsItem } from '../../services/data/skill';
import { Projetos } from '../../services/data/projetos';



import {
  Container, Menu, Cabecalho, OpcoesMenu, Dados, InfoDados,
  Skills, ItemSkill, Card, Itens, ProgressBar, Progress
} from './styles';


export default function DadosProjetos() {
  const ItensSkill = SkillsItem;
  const [showDados, setShowDados] = useState(true);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  function handleClickMenu(isTrue) {
    if (isTrue) {
      setShowDados(true);
    } else {
      setShowDados(false);
    }
  }

  return (
    <Container>
      <nav>
        <Menu>
          <Cabecalho>
            <span>Menu</span>
            <div></div>
          </Cabecalho>
          <OpcoesMenu>
            <span onClick={() => handleClickMenu(false)}>Projetos</span>
            <span onClick={() => handleClickMenu(true)}>Sobre</span>
          </OpcoesMenu>
        </Menu>
      </nav>
      <Dados>
        {showDados ? (
          <>
            <InfoDados initial="hidden" animate="visible" variants={variants}>
              <span>
                Me chamo Marcelo, tenho 35 anos e atuo a um ano e meio
                como desenvolvedor FullStack. Estou na área de técnologia desde os 18 anos de idade.
                Já trabalhei com robótica e agora estou na area de desenvolvimento Web, trabalho com técnologias como JavaScript, SqlServer, nodejs, reactjs. Sou Bacharel em Sistemas
                Gosto muito da área de sistemas e sou apaixonado
                por FrontEnd, onde já dedico meus estudos a mais de um ano. Caso queira saber mais sobre mim, pode entrar entrando em contato atráves
                do Linkedin, <b><a href='https://www.linkedin.com/in/marcelo-saraiva-b5350a225' target={'_blank'} rel="noreferrer">Clicando aqui!</a></b>
              </span>
            </InfoDados>
            <h1>Hard Skills</h1>
            <Skills>
              {ItensSkill.map((Item) =>
                <ItemSkill animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}>
                  {Item.icon}
                  <div>
                    <h3>{Item.titulo}</h3>
                    <ProgressBar>
                      <Progress percentual={Item.Percentual}>
                        <span>{Item.Percentual}</span>
                      </Progress>
                    </ProgressBar>
                  </div>
                </ItemSkill>
              )}
            </Skills>
          </>
        ) : (
          <>
            <Itens>
              {Projetos.map((projetos) =>
                <Card initial="hidden" animate="visible" variants={variants}>
                  <h3>{projetos.nome}</h3>
                  <img src={projetos.img} alt="" />
                  <a href={projetos.github} target={'_blank'}  rel="noopener noreferrer">
                    <FaGithub size={20} />
                    Git Hub
                  </a>
                </Card>
              )}
            </Itens>
          </>
        )}
      </Dados>
    </Container >
  );
}