import React from 'react';
import Layout from '../layout/Layout';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Hero from '../components/sections/hero';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Index = () => {
    const location = useLocation();
    return (
        <Layout location={location}>
            <StyledMainContainer className="fillHeight">
                <Hero/>
            </StyledMainContainer>
        </Layout>
    );
}

export default Index;
