import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { usePrefersReducedMotion } from '../../hooks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { loaderDelay, navDelay } from '../../utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 600;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h2{
    color: var(--slate)
  }

  h3 {
    margin-top: 5px;
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0 !important;
    color: var(--slate);
    max-width: 540px;
    a{
      line-height: 1.6;
    }
    
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;


const Hero = () => {

  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = <h1>Hola, mi nombre es</h1>;
  const two = <h2 className="big-heading">Jhoni ipia.</h2>;
  const three = <h3 className="big-heading">Desarrollo cosas para la web.</h3>;
  const four = (
    <>
      <p>
        Soy un desarrollador web que se especializa en crear y diseñar experiencias expecionales.
        Actualmente me centro en crear productos interactivos, accesibles 
        y centrado en la experiencia de usuario como freelancer.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://wa.link/4vl0bn"
      target="_blank"
      rel="noreferrer">
      Enviar mensaje
    </a>
  );


  const items = [one, two, three, four, five];
    return (
        <StyledHeroSection>
            {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
        </StyledHeroSection>
    );
}

export default Hero;
