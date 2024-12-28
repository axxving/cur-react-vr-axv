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
import { JsFunctions } from '../pages/components/components-sections/JSFunctions';
import { HookUseState } from '../pages/components/components-sections/hooks/useState/HookUseState';
import { UseState01 } from '../pages/components/components-sections/hooks/useState/excercices/useState01';
import { UseState02 } from '../pages/components/components-sections/hooks/useState/excercices/UseState02';

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

                    <Route path="/js-functions" element={<JsFunctions />} />

                    <Route path="/hook-usestate" element={<HookUseState />} />

                    {/* Hooks */}
                    <Route path="/useState01" element={<UseState01 />} />
                    <Route path="/useState02" element={<UseState02 />} />
                    
                </Routes>
            </Router>
        </>
    );
};
