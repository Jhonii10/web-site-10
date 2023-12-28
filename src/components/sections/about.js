import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '../../hooks';
import sr from '../../utils/sr';
import { srConfig } from '../../config/config';


const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--green);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

    const skills = ['JavaScript (ES6+)', 'Node.js', 'React', 'Mongodb', 'Style components', 'Material UI'];


    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">Acerca de mi</h2>
            <div className="inner">
                <StyledText>
                    <div>
                    <p>
                    ¡Hola! Mi nombre es Jhoni y me gusta crear cosas que viven en internet.
                    Mi interes en el desarrollo web comenzo en el 2020, cuando decidi tomar un diplomado en sitios web,
                    me gusto tanto que empeze a estudiar desarrollo de software en la universidad del valle.
                    desde el momento que inicie con HTML, CSS &amp; JavaScript aprendi muchisimo.
                    </p>

                    <p>
                    Avance rapido hasta el dia de hoy y he tenido el privilegio de trabajar para una variedad de clientes{' '}
                    <a href="/">Los reblujos de pati</a>,{' '}
                    <a href="/">Inversiones Diomardi sas</a>,{' '}
                    <a href="/">Up work</a>,{' '} mi principal objetivo estos dias es crear productos
                    y experiencias digitales interactivas y exclusivas como Freelancer para una variedad de clientes.
                    </p>

                        <p>
                        
                        Tambien recientemente cree una aplicion de mensajeria{' '}<a href="/">Chat app 10</a>{' '}usando tegnologias como 
                        MongoDB, Express, React, Node, Socket.io , Style components &amp; Material UI
                        </p>

                        <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <img 
                            className='img' 
                            src='/assets/me.png' 
                            alt='foto'
                            width={500}
                            quality={95}
                            
                            />
                    </div>
                </StyledPic>
                
            </div>
            
        </StyledAboutSection>
    );
}

export default About;
