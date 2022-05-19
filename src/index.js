import { Layout } from 'antd';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

createRoot(document.getElementById('root')).render(
    <Layout>
        <Layout.Content>
            <App />
        </Layout.Content>
    </Layout>
);