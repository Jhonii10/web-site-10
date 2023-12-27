import React from 'react';
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
    console.log(location.pathname === '/')
    return (
        <>
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <StyledContent>
            <Nav isHome={isHome}/>
            {children}
        </StyledContent>
        </ThemeProvider>
        </>
    );
}

export default Layout;
