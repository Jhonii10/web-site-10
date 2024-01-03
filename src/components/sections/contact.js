import React from 'react';
import styled from 'styled-components';
import { email } from '../../config/config'; 
const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
    return (
        <StyledContactSection>
            <h2 className="numbered-heading overline">¿Que sigue?</h2>
            <h2 className="title">Ponerse en contacto</h2>
            <p>
                Mi bandeja de entrada está abierta para cualquier consulta,
                propuesta o simplemente para intercambiar ideas.
                Estoy dispuesto a considerar oportunidades que se 
                alineen con mis habilidades y metas profesionales.

            </p>

            <a className="email-link" href={`mailto:${email}`}>
                Di hola
            </a>
        </StyledContactSection>
    );
}

export default Contact;
