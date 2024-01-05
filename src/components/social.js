import React from 'react';
import styled from 'styled-components';
import Side from './side';
import { socialMedia } from '../config/config';
import { Icon } from './icons';
const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    
    
      margin-bottom: 12px;
    

    a {
        align-items: center;
        border: 1px solid #000;
        border-radius: 50%;
        box-sizing: border-box;
        color: #000;
        cursor: pointer;
        display: inline-flex;
        height: 36px;
        justify-content: center;
        overflow: hidden;
        padding: 4px;
        position: relative;
        transition: color .33s linear .5s,border-color .5s ease-out,background-color .33s linear 0s;
        vertical-align: bottom;
        width: 36px;
        z-index: 1;

        
        &:hover {
            background-color: #fff;
            border: 1px solid #fff;
            color: #fff;

            &:after {
              transform: scale(147%) translateY(0);
            }
        }

        &:after {
        border-radius: 50%;
        color: #fff;
        content: "";
        height: 67px;
        position: absolute;
        top: 0;
        transform: scale(100%) translateY(67px);
        transition: transform 1s cubic-bezier(.66, .00, .34, 1.00);
        width: 67px;
        z-index: -1;

        
       }

       &.GitHub {
        &:after{
            background-color: black;
        }
        }

        &.Instagram {
        &:after{
            background: linear-gradient(#833ab4,#fd1d1d,#fcaf45);
        }
        }

        &.Facebook {
        &:after{
            background-color: #0866FF;
        }
        }
        &.Linkedin {
        &:after{
            background-color: #0a66c2;
        }
        }
        &.Whatsapp {
        &:after{
            background-color: #2ec452;
        }
        }
        
        svg {
            width: 20px;
            height: 20px;
        }

       
      }
    


  }
`;


const Social = ({isHome}) => {
    return (
        <Side isHome={isHome} orientation='right'>
            <StyledSocialList>
            {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} className={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
            </StyledSocialList>
        </Side>
    );
}

export default Social;
