import React from 'react';


import {
  FaDev, FaLinkedin, FaGithub, FaMapMarkerAlt,
  FaRegEnvelope
} from 'react-icons/fa';

import {
  Container, Informacoes, DadosPerfil, Funcao ,RedeSociais,
  Detalhes,DadosEndereco
} from './styles';

export default function InfoPessoais() {
  return (
    <Container>
      <Informacoes>
        <DadosPerfil>
          <img src="https://github.com/MarceloSSaraivaa.png" alt="Imagem perfil" />
          <h1>Marcelo Saraiva</h1>
        </DadosPerfil>
        <Funcao>
          <FaDev size={20} />
          <span>Web Developer</span>
        </Funcao >
        <RedeSociais>
          <div>
           
            <a  href='https://www.linkedin.com/in/marcelo-saraiva-b5350a225/' target={'_blank'} rel="noopener noreferrer"><FaLinkedin size={25} /></a>
            <a href='https://github.com/MarceloSSaraivaa' target={'_blank'}  rel="noopener noreferrer"><FaGithub size={25} /></a>
          </div>
        </RedeSociais>
        <DadosEndereco>
          <Detalhes>
            <FaMapMarkerAlt size={20} />
            <span>Vitória - ES, Brasil</span>
          </Detalhes>
          <Detalhes>
            <FaRegEnvelope size={20}/>
            <span>Engauto.marcelo@gmail.com</span>
          </Detalhes>
        </DadosEndereco>
      </Informacoes>
    </Container>
  );
}
