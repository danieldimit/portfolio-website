import React, { Component } from 'react';

import Header from '../Header';
import Breadcrumb from '../../container/Breadcrumb';
import Results from '../../container/Results';
//import ArticleSelection from '../../container/ArticleSelection';
import Footer from '../Footer';

class ResultView extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumb />
                <Results />
                <Footer />
            </div>
        );
    }
}

export default ResultView;