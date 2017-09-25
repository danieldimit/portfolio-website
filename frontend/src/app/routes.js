import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/views/Home';
import About from './components/views/About';
import Project from './components/views/Project';
import Projects from './components/views/Projects';
import Contact from './components/views/Contact';
import BIM from './components/views/BIM';

import NotFound from './components/views/NotFound';

export default (
    <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/projects/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/bim" component={BIM} />
            <Route path="*" component={NotFound} />
    </Route>
);
