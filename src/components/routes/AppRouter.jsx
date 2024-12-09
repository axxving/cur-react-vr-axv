import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from 'react-router-dom';
import { Home } from '../pages/home';
import { Components } from '../pages/Components';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/componentes" element={<Components />} />
                </Routes>
            </Router>
        </>
    );
};
