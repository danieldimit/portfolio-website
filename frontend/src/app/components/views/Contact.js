import React, { Component } from 'react';
import {Helmet} from "react-helmet";


import Header from '../Header';
import Footer from '../Footer';


import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
} from "react-google-maps";
import mapStyle from "../../../../public/res/mapStyle.json";

const StyledMapWithAnInfoBox = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDd3nVf8mY97Bl1zk9lx6j5kHZDosCxgVA&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 42.69, lng: 23.31 },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={props.center}
        defaultOptions={{ styles: mapStyle}}
    >
    </GoogleMap>
);


class Contact extends Component {


    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact - Toskov Architects</title>
                    <meta property="og:url"
                          content="https://fakenewsgraph.de/contact" />
                    <meta property="og:type"
                          content="article" />
                    <meta property="og:title"
                          content="Contact the FakeNewsGraph team" />
                    <meta property="og:description"
                          content="Send us an email if you are interseted in the Fake News Graph tool.
                          We would love to hear from you!" />
                    <meta property="og:image"
                          content="https://fakenewsgraph.de/img/meta/thumbnail2.png" />

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@FakeNewsGraph"/>
                    <meta name="twitter:title" content="Contact the FakeNewsGraph team"/>
                    <meta name="twitter:description" content="Send us an email if you are interseted in the Fake News Graph tool.
                          We would love to hear from you!"/>
                    <meta name="twitter:image" content="https://fakenewsgraph.de/img/meta/thumbnail2.png"/>
                </Helmet>
                <Header />
                <div  className="container-content-page">
                    <div className="section-content">
                        <h1 className="section-header">Contact</h1>
                        <br/>

                        <StyledMapWithAnInfoBox/>

                        <p></p>
                        <p>
                            If you’d like to discuss a project, please get in touch. <br/>
                            We look forward to hearing from you.
                        </p>

                        <p>
                            <b>Toskov</b> Architects<br/>
                            <a  href="mailto:info@toskovarchitects.com">
                                info@toskovarchitects.com
                            </a><br/>
                            +44 (0) 742 470 8225

                        </p>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;
