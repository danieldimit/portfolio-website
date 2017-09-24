import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className="container-content-page">
                <h1>Projects</h1>
                <div id="container-team">
                    <div id="project-presentation">
                        <hr />
                        <header className="heading heading-h3">
                            <h3 className="header-smaller-padding">Goal</h3>
                        </header>
                        <p>
                            We developed FakeNewsGraph to give citizens,
                            students and journalists a simple tool for
                            visualizing the networks which spread fake news. We
                            wanted to create an intuitive platform for showing
                            who spread what kind of rumor or content. This tool
                            now can trace the diffusion of any kind of tweet -
                            not just fake news. FakeNewsGraph is fully scalable
                            and easily adjustable for different sets of
                            hashtags. We created this website as a prototype of
                            the tool and proof of concept. At the moment, this
                            prototype visualizes information that we already
                            collected.
                        </p>

                        <hr />

                        <header className="heading heading-h3">
                            <h3 className="header-smaller-padding">
                                Background
                            </h3>
                        </header>
                        <p>
                            The tool is a prototype in a student research
                            project at Technische Universität Berlin and Freie
                            Universität Berlin. We are bachelor and master
                            students of Media Computer Science, Technical
                            Computer Science and Computer Science. During the
                            summer of 2017 we developed FakeNewsGraph as a
                            powerful data retrieval and visualization engine
                            collecting information from Twitter.
                        </p>
                        <p>The project has been presented at:</p>
                        <ul>
                            <li>
                                <a
                                    href="https://demoday.disruptpopulism.org/de/"
                                    target="_blank"
                                    rel="noopener">
                                    Demoday of Disrupted Populism
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://prototypefund.de/"
                                    target="_blank"
                                    rel="noopener">
                                    Prototype Fund
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.democracy.factoryberlin.com/"
                                    target="_blank"
                                    rel="noopener">
                                    Hackathon of Factory Berlin
                                </a>
                            </li>
                        </ul>

                        <hr />
                        <header className="heading heading-h3">
                            <h3 className="header-smaller-padding">The Team</h3>
                        </header>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
