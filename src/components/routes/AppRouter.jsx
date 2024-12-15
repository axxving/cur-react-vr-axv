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
import { DisplayData } from '../pages/components/components-sections/DisplayData';
import { PropsCommunication } from '../pages/components/components-sections/PropsCommunication';
import { DefaultPropsDestructuring } from '../pages/components/components-sections/DefaultPropsDestructuring';
import { Events } from '../pages/components/components-sections/Events';

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

                    <Route path="/mostrar-datos" element={<DisplayData />} />

                    <Route path="/props" element={<PropsCommunication />} />

                    <Route
                        path="/default-props"
                        element={<DefaultPropsDestructuring />}
                    />

                    <Route path="/events" element={<Events />} />
                </Routes>
            </Router>
        </>
    );
};
