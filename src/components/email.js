import React from 'react';
import styled from 'styled-components';
import Side from './side';
import { email } from '../config/config';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    font-weight: 600;

    span{
        writing-mode: vertical-rl;
        transform: rotate(180deg);

    }

    &:hover,
    &:focus {
      transform: translateY(-4px);
    }

    
  }
`;

const Email = ({isHome}) => {
    return (
        <Side isHome={isHome} orientation='left'>
        <StyledLinkWrapper>
         <a href={`mailto:${email}`}><span>{email}</span></a>
        </StyledLinkWrapper>
        </Side>
    );
}

export default Email;
