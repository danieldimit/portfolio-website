import React, { Component } from 'react';

import Header from '../Header';
import Breadcrumb from '../../container/Breadcrumb';
import Project from '../../container/Project';
import Footer from '../Footer';

class ProjectView extends Component {
    render() {
        return (
            <div>
                <Header />
                <Project />
                <Footer />
            </div>
        );
    }
}

export default ProjectView;
