import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles';
import Nav from '../components/nav';
import Email from '../components/email';
import Social from '../components/social';
import Loader from '../components/loader';
import Head from '../components/head';


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({children , location}) => {

    const isHome = location.pathname === '/';
    const [isLoading, setIsLoading] = useState(isHome);

    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'));
        if (allLinks.length > 0) {
          allLinks.forEach(link => {
            if (link.host !== window.location.host) {
              link.setAttribute('rel', 'noopener noreferrer');
              link.setAttribute('target', '_blank');
            }   
          });
        }
      };
    
      useEffect(() => {
        if (isLoading) {
          return;
        }
    
        if (Boolean(location.pathname)) {
          const id = location.pathname.substring(1); 
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView();
              el.focus();
            }
          }, 0);
        }
    
        handleExternalLinks();
      }, [isLoading, location]);
    
      

    return (
        <>
        
            <Head/>
            
            <GlobalStyle/>
            <a className="skip-to-content" href="#content">
            Skip to Content
            </a>
            {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <div id="content">
                {children}
              </div>
            </StyledContent>
          )}
        

        </>
    );
}

export default Layout;
