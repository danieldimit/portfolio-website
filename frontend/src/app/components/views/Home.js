import React, { Component } from 'react';
import {Helmet} from "react-helmet";

import Header from '../Header';
import Breadcrumb from '../../container/Breadcrumb';
import Home from '../Home';
import Footer from '../Footer';

class HomeView extends Component {
    render() {

        return (
            <div>
                <Helmet>
                    <title>Toskov Architects</title>
                    <meta property="og:url"
                          content="https://fakenewsgraph.de" />
                    <meta property="og:type"
                          content="article" />
                    <meta property="og:title"
                          content="Toskov Architects" />
                    <meta property="og:description"
                          content="A tool for visualization and analysis of the diffusion of Tweets.
                          This tool can give you vital and informative insights about the retweeters of a certain Tweet." />
                    <meta property="og:image"
                          content="https://fakenewsgraph.de/img/meta/wordcloud.png" />

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@FakeNewsGraph"/>
                    <meta name="twitter:title" content="FakeNewsGraph"/>
                    <meta name="twitter:description" content="A tool for visualization and analysis of the diffusion of Tweets.
                          This tool can give you vital and informative insights about the retweeters of a certain Tweet."/>
                    <meta name="twitter:image" content="https://fakenewsgraph.de/img/meta/wordcloud.png"/>

                </Helmet>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default HomeView;
