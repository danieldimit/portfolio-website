import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../Header';
import Footer from '../Footer';
import About from '../About';

class AboutView extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>About - Toskov Architects</title>
                    <meta
                        property="og:url"
                        content="https://fakenewsgraph.de"
                    />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="About - Toskov Architects" />
                    <meta
                        property="og:description"
                        content="A tool for visualization and analysis of the diffusion of Tweets.
                          This tool can give you vital and informative insights about the retweeters of a certain Tweet."
                    />
                    <meta
                        property="og:image"
                        content="https://fakenewsgraph.de/img/meta/wordcloud.png"
                    />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@FakeNewsGraph" />
                    <meta name="twitter:title" content="FakeNewsGraph" />
                    <meta
                        name="twitter:description"
                        content="A tool for visualization and analysis of the diffusion of Tweets.
                          This tool can give you vital and informative insights about the retweeters of a certain Tweet."
                    />
                    <meta
                        name="twitter:image"
                        content="https://fakenewsgraph.de/img/meta/wordcloud.png"
                    />
                </Helmet>
                <Header />
                <About />
                <Footer />
            </div>
        );
    }
}

export default AboutView;
