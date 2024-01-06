import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconLogo } from './icons';
import anime from 'animejs';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #A, #B, #C {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({finishLoading}) => {

    const [isMounted, setIsMounted] = useState(false);

    const animate = () => {
      const loader = anime.timeline({
        complete: () => finishLoading(),
      });
  
      loader
      .add({
        targets: '#logo #A',
        delay: 150,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo #B',
        duration: 500,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo #C',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 150,
        duration: 2500,
        easing: 'easeInOutQuart',
        color: [
            'rgb(255 51 51)', 'rgb(255 51 196)', 'rgb(218 51 255)', 'rgb(109 51 255)', 'rgb(51 62 255)',
            'rgb(51 171 255)', 'rgb(51 255 216)', 'rgb(255 220 51)', 'rgb(255 144 51)', 'rgb(0 0 0)'
          ],
          opacity: 0,
          scale: 0.1,
      })
    
        
    };
  
    useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), 10);
      animate();
      return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  

    return (
        <StyledLoader className="loader" isMounted={isMounted}>
            <div className="logo-wrapper" >
                <IconLogo />
            </div>
        </StyledLoader>
    );
}

export default Loader;
