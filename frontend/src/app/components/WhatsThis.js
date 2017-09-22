import React, { Component } from 'react';
import { Link } from 'react-router';

class WhatsThis extends Component {
    render() {
        return (
            <div className="container-content-page">
                <h1>About this project</h1>
                <div id="container-team">
                    <div id="project-presentation">
                        <hr />
                        <header className="heading heading-h3">
                            <h3 className="header-smaller-padding">
                                How It Works
                            </h3>
                        </header>
                        <p>
                            Our tool analyzes raw data collected from the
                            Twitter Streaming API for given search terms and
                            computes graphs along with a set of statistics
                            describing the diffusion and individual user
                            accounts.
                        </p>
                        <p>
                            Mouse over the dots in the network and get
                            contextual information for each node. You can also
                            take a snapshot of a network or download the data as
                            .csv for further analysis.
                        </p>
                        <p>
                            Sometimes you will see that totally different
                            networks operate at diffusion levels far down the
                            network rabbit hole. Sometimes the network is very
                            small, e.g. when only a few users retweeted once and
                            had no further interactions.
                        </p>
                        <p>
                            There are now well over 2,000 graphs that we have
                            already generated. Storing the results enables us to
                            further develop and apply machine learning
                            algorithms to detect similarities and hidden
                            patterns in networks.
                        </p>

                        <hr />

                        <header className="heading heading-h3">
                            <h3 className="header-smaller-padding">Features</h3>
                        </header>
                        <ul>
                            <li>
                                Fast network visualization of retweet networks
                                in 4 levels of diffusion
                            </li>
                            <li>
                                Replay function to see how the network developed
                                over time
                            </li>
                            <li>
                                Contextual information displayed alongside each
                                node in the network
                            </li>
                            <li>
                                Statistical analysis of languages in tweets,
                                user account information
                            </li>
                            <li>
                                Powerful cloud-based and scalable architecture
                                in backend
                            </li>
                            <li>
                                Easy export of data for further analysis (.png
                                images and .csv files)
                            </li>
                        </ul>

                        <hr />
                        <header className="heading heading-h3">
                            <h3 className="header-smaller-padding">
                                Show me more
                            </h3>
                        </header>
                        <p>
                            <Link to={'/contact'}>Contact</Link> us if you would
                            like to see the diffusion of a particular network or
                            Tweet.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatsThis;
