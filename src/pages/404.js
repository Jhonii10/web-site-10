import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from '../styles';
import { usePrefersReducedMotion } from '../hooks';
import { navDelay } from '../utils';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledError404 = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 12px;


  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        
        
        h1{
            display: inline-block;
            margin: 0 20px 0 0;
            padding-right: 24px;
            font-size: 24px;
            font-weight: 600;
            border-right:1px solid var(--dark-navy);
            color: var(--dark-navy);

            
        }

        div{
                display: inline-block;
                text-align: center;

                h2{
                    font-size: var(--fz-md);
                    font-weight: 500;
                    margin: 0;
                    color: var(--dark-navy);
                }
         }
    }


  }

`;

const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 20px;
  font-weight: 600;
  color: var(--dark-navy);
  border: 1px solid var(--dark-navy);

  &:hover{
    background-color:transparent;
    font-weight: 700;
    color: var(--dark-navy);
    
  }
  
`;



const Error404 = () => {

    const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const content = (
    <StyledError404>
            <div>
                <div>
                    <h1>404</h1>
                <div>
                <h2>
                No se pudo encontrar esta página.
                </h2>
                </div>
                </div>
                <StyledHomeButton to={'/'}>Inicio</StyledHomeButton>
            </div>
    </StyledError404>
  );
    
    return (
        <>        
        <GlobalStyle/>
        <StyledContent>
        <Helmet title="Pagina no encontrada" />
        {prefersReducedMotion ? (
        <>{content}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              {content}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
        </StyledContent>
        </>

    );
}

export default Error404;
