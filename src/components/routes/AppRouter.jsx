import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
} from 'react-router-dom';
import { Home } from '../pages/home';
import { Components } from '../pages/components/components-sections/Components';
import { NewComponent } from '../pages/components/components-sections/NewComponent';
import { Fragments } from '../pages/components/components-sections/Fragments';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/componentes" element={<Components />} />

                    <Route
                        path="//nuevo-componente"
                        element={<NewComponent />}
                    />

                    <Route path="/fragmentos" element={<Fragments />} />
                </Routes>
            </Router>
        </>
    );
};
