import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import About from '../About';

import Header from '../Header';
import Footer from '../Footer';

class AboutView extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>About - Toskov Architects</title>
                    <meta property="og:url"
                          content="https://fakenewsgraph.de/about" />
                    <meta property="og:type"
                          content="article" />
                    <meta property="og:title"
                          content="About the FakeNewsGraph" />
                    <meta property="og:description"
                          content="A tool for visualization and analysis of the diffusion of Tweets.
                          This tool can give you vital and informative insights about the retweeters of a certain Tweet.
                          The tool was developed by a team from the Technical University of Berlin and the Free University of Berlin." />
                    <meta property="og:image"
                          content="https://fakenewsgraph.de/img/meta/thumbnail2.png" />

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@FakeNewsGraph"/>
                    <meta name="twitter:title" content="About the FakeNewsGraph"/>
                    <meta name="twitter:description" content="A tool for visualization and analysis of the diffusion of Tweets.
                          This tool can give you vital and informative insights about the retweeters of a certain Tweet.
                          The tool was developed by a team from the Technical University of Berlin and the Free University of Berlin."/>
                    <meta name="twitter:image" content="https://fakenewsgraph.de/img/meta/thumbnail2.png"/>
                </Helmet>
                <Header />
                <About/>
                <Footer />
            </div>
        );
    }
}

export default AboutView;