import React from 'react';
import Layout from '../layout/Layout';
import { useLocation } from 'react-router-dom';

const Index = () => {
    const location = useLocation();
    return (
        <Layout location={location}>
            <div>
                contenido
            </div>
        </Layout>
    );
}

export default Index;
