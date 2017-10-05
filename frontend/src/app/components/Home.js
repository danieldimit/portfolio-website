import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { browserHistory } from 'react-router';
import RelatedProjects from '../container/RelatedProjects';
import HeroImage from '../container/HeroImage';

import { Carousel } from 'react-responsive-carousel';// carousel styles
import Lightbox from 'react-image-lightbox';

const images = [
    './img/refs/17,5_EN.png',
    './img/refs/TA_EN.png',
    './img/refs/Reference_Artistico_EN.jpg'
];

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        let tag = '';
        if (typeof window !== 'undefined') {
            let params = new URL(document.location).searchParams;
            tag = params.get('tag');
        }

        const {
            photoIndex,
            isOpen,
        } = this.state;

        return (
            <div id="home">
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

                <img id="hero-placeholder" src="img/hero-images/hero-placeholder.png" />

                <HeroImage />

                <br/>


                <div id="home-content">
                    <div id="home-top-content" className="container-content-page">
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

                    <RelatedProjects />

                    <div id="references">
                        <div className="container-content-page home-page-topbottom-margin">
                            <h1>Professional References</h1>
                            <hr />
                            <div className="ref-text">
                                We work collaboratively to develop creative and considered designs that embrace our
                                client’s aspirations and unlock value. We aim to continue our track record in providing
                                high quality services at every stage of the process.
                            </div>
                            <br/>
                            <div className="row ref-cols">
                                <div
                                    className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                    <div className="ref-padding-color cursor" id="ref-1"
                                         onClick={() => this.setState({
                                             photoIndex: 0, isOpen: true })}>
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

                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                    <div className="ref-padding-color cursor" id="ref-2"
                                         onClick={() => this.setState({
                                             photoIndex: 1, isOpen: true })}>
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
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                                    <div className="ref-padding-color cursor" id="ref-3"
                                         onClick={() => this.setState({
                                             photoIndex: 2, isOpen: true })}>
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

                        {isOpen &&
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() => this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })}
                            onMoveNextRequest={() => this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })}
                        />
                        }

                    </div>
                    <br/>

                    <div className="container-content-page home-page-topbottom-margin">
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
