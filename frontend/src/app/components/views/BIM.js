import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Lightbox from 'react-image-lightbox';

import Header from '../Header';
import Footer from '../Footer';

const images = [
    './img/bim/bim1.jpg',
    './img/bim/bim2.png'
];

class BIM extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;

        return (
            <div>
                <Helmet>
                    <title>BIM - Toskov Architects</title>
                    <meta property="og:url"
                          content="https://fakenewsgraph.de/impressum" />
                    <meta property="og:type"
                          content="article" />
                    <meta property="og:title"
                          content="BIM - Toskov Architects" />
                    <meta property="og:description"
                          content="Statement of the ownership and authorship of the Fake News Graph website." />
                    <meta property="og:image"
                          content="https://fakenewsgraph.de/img/meta/thumbnail2.png" />

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@FakeNewsGraph"/>
                    <meta name="twitter:title" content="Impressum of the FakeNewsGraph"/>
                    <meta name="twitter:description"
                          content="Statement of the ownership and authorship of the Fake News Graph website."/>
                    <meta name="twitter:image" content="https://fakenewsgraph.de/img/meta/thumbnail2.png"/>
                </Helmet>
                <Header />
                <div className='container-content-page'>
                    <h1>Bim</h1>
                    <hr />

                    <div className="row">
                        <div
                            className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <img className="content-img"
                                 type="button"
                                 onClick={() => this.setState({
                                     photoIndex: 0, isOpen: true })}
                                 src="img/bim/bim1.jpg"/>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <img className="content-img"
                                 type="button"
                                 onClick={() => this.setState({
                                     photoIndex: 1, isOpen: true })}
                                 src="img/bim/bim2.png"/>
                        </div>
                    </div>
                    <br/>

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
                    <p>
                        The building consists of 16 apartments and semi-underground garage for 18 vehicles.
                        The first floor is 150 cm above the ground level, which allows the underground parking
                        places to be opened to the site with no HVAC installations equirements. The planning
                        efficiently uses the exposures, situating all apartments predominantly without north
                        sides of the building. To the north are placed all the required auxiliary rooms, storages,
                        the entrance with a staircase and an elevator.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default BIM;
