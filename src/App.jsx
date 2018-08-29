import React from 'react';
import { hot } from 'react-hot-loader';
//import addSiteFormular from './components/addSiteFormular/addSiteFormular';
import Intro from './components/intro';
import Content from './components/Content';
/**
 * Stateless Component App which holds the Components Intro and Content
 */
const App = () => (
    <div>
        <Intro/>
        <Content/>
    </div>
);

export default hot(module)(App);
