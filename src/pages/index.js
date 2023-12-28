import React from 'react';
import Layout from '../layout/Layout';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Jobs from '../components/sections/jobs';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Index = () => {
    const location = useLocation();
    return (
        <Layout location={location}>
            <StyledMainContainer className="fillHeight">
                <Hero/>
                <About/>
                <Jobs/>
            </StyledMainContainer>
        </Layout>
    );
}

export default Index;
