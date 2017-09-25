import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { browserHistory } from 'react-router';

import { Carousel } from 'react-responsive-carousel';// carousel styles

class Home extends Component {

    render() {
        let tag = '';
        if (typeof window !== 'undefined') {
            let params = new URL(document.location).searchParams;
            tag = params.get('tag');
        }

        return (
            <div>
                <Helmet>
                    <title>Toskov Architects</title>
                    <meta property="og:type" content="article" />
                    <meta
                        property="og:title"
                        content={
                            'FakeNewsGraph - Results for a certain Hashtag'
                        }
                    />
                    <meta
                        property="og:description"
                        content={
                            'Choose a Tweet connected with a certain hashtag to visualize and analyse.'
                        }
                    />
                    <meta
                        property="og:image"
                        content="https://fakenewsgraph.de/img/meta/chooseTweet.png"
                    />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@FakeNewsGraph" />
                    <meta
                        name="twitter:title"
                        content="FakeNewsGraph - Results for a certain Hashtag"
                    />
                    <meta
                        name="twitter:description"
                        content="Choose a Tweet connected with a certain hashtag to visualize and analyse."
                    />
                    <meta
                        name="twitter:image"
                        content="https://fakenewsgraph.de/img/meta/chooseTweet.png"
                    />
                </Helmet>

                <Carousel
                    showArrows={false}
                    useKeyboardArrows
                    showStatus={false}
                    showThumbs={false}
                    dynamicHeight
                    autoPlay interval={3000} infiniteLoop>
                    <div>
                        <img src="img/hero-images/01_mask.jpg" />
                        <div className="legend">
                            <h1>Inspiration of Freedom</h1>
                            <br/>
                            <div>
                                There are borders all around us.
                                Only when you go beyond them you can realise their limits.
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="img/hero-images/hero4.jpg" />
                        <div className="legend">
                            <h1>Break the Stigma</h1>
                            <br/>
                            <div>Something revolutionary</div>
                        </div>
                    </div>
                    <div>
                        <img src="img/hero-images/hero2.jpg" />
                        <div className="legend">
                            <h1>Create new spaces</h1>
                            <br/>
                            <div>Spaces and stuff</div>
                        </div>
                    </div>
                </Carousel>
                <br/>


                <div id="home-content">
                    <div className="container-content-page">
                        <h1>Architecture & Design</h1>
                        <hr />
                        <div>
                            Toskov Architects Ltd is award winning architectural studio specialized in the design of
                            residential, commercial and mixed-used buildings. Our design is distinguished with
                            creativity, smart solutions and high efficiency...
                        </div>
                        <br/>
                        <br/>
                        <button onClick={() => browserHistory.push('/about')}>
                            Read more...
                        </button>
                    </div>
                    <br/>

                    <div className="container-content-page">
                        <h1>Relevant Projects</h1>
                        <hr />
                        <div className="row grid-projects">
                            <div onClick={() => browserHistory.push('/projects/project')}
                                 className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                <div className="project-container">
                                    <img src="img/about/thumbnail.jpg"/>

                                    <div className="thumbnail-header">
                                        <div className="thumbnail-subcontainer">
                                            <h5 className="thumbnail-type text-cap">
                                                Residential
                                            </h5>
                                            <h5 className="thumnail-title">
                                                Sample Project
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => browserHistory.push('/projects/project')}
                                 className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                <div className="project-container">
                                    <img src="img/about/thumbnail.jpg"/>

                                    <div className="thumbnail-header">
                                        <div className="thumbnail-subcontainer">
                                            <h5 className="thumbnail-type text-cap">
                                                Residential
                                            </h5>
                                            <h5 className="thumnail-title">
                                                Sample Project
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => browserHistory.push('/projects/project')}
                                 className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                <div className="project-container">
                                    <img src="img/about/thumbnail.jpg"/>

                                    <div className="thumbnail-header">
                                        <div className="thumbnail-subcontainer">
                                            <h5 className="thumbnail-type text-cap">
                                                Residential
                                            </h5>
                                            <h5 className="thumnail-title">
                                                Sample Project
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => browserHistory.push('/projects/project')}
                                 className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                <div className="project-container">
                                    <img src="img/about/thumbnail.jpg"/>

                                    <div className="thumbnail-header">
                                        <div className="thumbnail-subcontainer">
                                            <h5 className="thumbnail-type text-cap">
                                                Residential
                                            </h5>
                                            <h5 className="thumnail-title">
                                                Sample Project
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => browserHistory.push('/projects/project')}
                                 className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                <div className="project-container">
                                    <img src="img/about/thumbnail.jpg"/>

                                    <div className="thumbnail-header">
                                        <div className="thumbnail-subcontainer">
                                            <h5 className="thumbnail-type text-cap">
                                                Residential
                                            </h5>
                                            <h5 className="thumnail-title">
                                                Sample Project
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => browserHistory.push('/projects/project')}
                                 className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                <div className="project-container">
                                    <img src="img/about/thumbnail.jpg"/>

                                    <div className="thumbnail-header">
                                        <div className="thumbnail-subcontainer">
                                            <h5 className="thumbnail-type text-cap">
                                                Residential
                                            </h5>
                                            <h5 className="thumnail-title">
                                                Sample Project
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="references">
                        <div className="container-content-page">
                            <h1>Professional References</h1>
                            <hr />
                            <div>
                                We work collaboratively to develop creative and considered designs that embrace our
                                client’s aspirations and unlock value. We aim to continue our track record in providing
                                high quality services at every stage of the process.
                            </div>
                            <br/>
                            <div className="row ref-cols">
                                <div
                                    className="col-lg-4 col-md-4 col-sm-4 col-xs-12 grid-margin">
                                    <div className="ref-padding" id="ref-1">
                                        <h6 className="exp-type">
                                            ACADEMIC REFERENCE
                                        </h6>
                                        <h2 className="exp-referer-org">
                                            STUDIO 17.5
                                        </h2>
                                        <h5 className="exp-referer-person">
                                            Prof. Dr. Plamen Nanov, March<br/>
                                            Founder of Studio 17.5 Ltd
                                        </h5>
                                    </div>

                                    <div className="ref-padding">
                                        <h5>ACADEMIC PROJECTS</h5>
                                        <ul>
                                            <li>Centre for Culture and Debate</li>
                                            <li>Art Gallery Christo Javashev</li>
                                            <li>Concert Hall</li>
                                            <li>Public Library</li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 grid-margin">
                                    <div className="ref-padding" id="ref-2">
                                        <h6 className="exp-type">
                                            PROFESSIONAL REFERENCE
                                        </h6>
                                        <h2 className="exp-referer-org">
                                            TILEV ARCHITECTS
                                        </h2>
                                        <h5 className="exp-referer-person">
                                            Assist. Prof. Dimtcho Tilev, MArch<br/>
                                            Co-founder of Tilev Architects Ltd
                                        </h5>
                                    </div>

                                    <div className="ref-padding">
                                        <h5>PROFESSIONAL PROJECTS</h5>
                                        <ul>
                                            <li>American College Sofia</li>
                                            <li>Art Gallery Vladimir Dimitrov</li>
                                            <li>Ministry of Economy & Energy</li>
                                            <li>Boardroom - UniCredit Bulbank</li>
                                            <li>Interior of UniCredit Bulbank</li>
                                            <li>BoF of UniCredit Bulbank</li>
                                            <li>Competition - Regional Library</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 grid-margin">
                                    <div className="ref-padding" id="ref-3">
                                        <h6 className="exp-type">
                                            PROFESSIONAL REFERENCE
                                        </h6>
                                        <h2 className="exp-referer-org">
                                            ARTISTICO
                                        </h2>
                                        <h5 className="exp-referer-person">
                                            Malin Valchinov <br/>
                                            CEO of Artistico Ltd
                                        </h5>
                                    </div>

                                    <div className="ref-padding">
                                        <h5>PROFESSIONAL PROJECTS</h5>
                                        <ul>
                                            <li> New Building with Furniture Manufacturing,
                                                Administrative services and Showroom of
                                                Artistico Ltd, Trud, Plovdiv.
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="container-content-page">
                        Took active part in the design of over 16 000 sq.m. of large and complex public building
                        in all design stages with construction permit and more than 7 000 sq.m. of residential
                        and mixed-used buildings
                    </div>
                    <br/>

                    <div className="container-content-page">
                        <div className="row equal-length-fix">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src="img/about/tutor.jpg"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div id="tutor-text">
                                    <div className="table-row">
                                        <h5 className="text-cap table-cell">Design Tutor</h5>
                                    </div>

                                    <div className="table-row">
                                        <h1 className="text-normal table-cell">Teaching is Experience</h1>
                                    </div>

                                    <div id="tutor-text-quote" className="table-row">
                                        <div className="table-cell">
                                            Being a lecturer at the Architectural Department, gives the opportunity to gain
                                            additional experience as a tutor to young creative students - teaching and managing
                                            the individual work, coordinating and providing professional guidance.
                                        </div>
                                    </div>
                                    <div id="tutor-text-place" className="table-row">
                                        <div className="table-cell valign-bottom">
                                            <i>University of Architecture, Civil Engineering and Geodesy</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <br/>

            </div>
        );
    }
}

export default Home;
