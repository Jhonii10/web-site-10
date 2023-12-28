import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles';
import Nav from '../components/nav';


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({children , location}) => {

    const isHome = location.pathname === '/';
    // const [isLoading, setIsLoading] = useState(isHome);

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
        // if (isLoading) {
        //   return;
        // }
    
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
      }, [location]);
    
      

    return (
        <>
        <div id='root'>
            <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <a className="skip-to-content" href="#content">
            Skip to Content
            </a>
            <StyledContent>
                <Nav isHome={isHome}/>
                <div id="content">
                {children}
              </div>
            </StyledContent>
            </ThemeProvider>
        </div>

        </>
    );
}

export default Layout;
