import React, { Component } from 'react';

import Header from '../Header';
import Breadcrumb from '../../container/Breadcrumb';
import Analysis from '../../container/Analysis';
import Footer from '../Footer';

class AnalysisView extends Component {
    render() {
        return (
            <div>
                <Header />
                <Analysis />
                <Footer />
            </div>
        );
    }
}

export default AnalysisView;
