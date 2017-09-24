import React, { Component } from 'react';

class Footer extends Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "js/back-to-top-script.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <div id="back-to-top-btn"><span></span>Back to top</div>
                <footer>
                    <div id="pre-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 side-pad top-pad">
                                    <h2 id="footer-header"><div id="toskov">TOSKOV</div> &nbsp; <div id="architects"> ARCHITECTS</div></h2>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 top-pad">
                                    <div id="footer-text">
                                        “Most people build as they live – as a matter of routine and senseless accidents.
                                        But a few understand that building is a great symbol. We live in our minds, and
                                        existence is the attempt to bring that life into physical reality, to state it
                                        in gesture and form. For the man who understands this, a house he owns is a statement
                                        of his life. If he doesn’t build, when he has the means, it’s because his life has
                                        not been what he wanted.”
                                        <p>“The Fountainhead”</p>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-3 col-md-3 col-sm-3 col-xs-12 top-pad">
                                    <div id="footer-contact" className="pull-right">
                                        <b>Toskov</b> Architects<br/>
                                        <a  href="mailto:info@toskovarchitects.com">
                                            info@toskovarchitects.com
                                        </a><br/>
                                        +44 (0) 742 470 8225
                                    </div>
                                </div>
                                <div
                                    className="col-lg-12 col-md-12 col-sm-12 col-xs-12 top-pad">
                                    <div id="footer-contact" className="pull-right">
                                        <img src="img/simple-logo.png"/>
                                        <img src="img/simple-logo.png"/>
                                        <img src="img/simple-logo.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" id="rights-and-credits">
                        <div className="row">
                            <div
                                className="col-lg-9 col-md-9 col-sm-9 col-xs-12"
                                id="footer-about">
                                <div>
                                    &copy; All rights reserved 2017. No content of this website may be used by third parties
                                    without the explicit permision of Toskov Architects.
                                </div>
                            </div>
                            <div
                                className="col-lg-3 col-md-3 col-sm-3 col-xs-12"
                                id="footer-contact">
                                <div className="pull-right">
                                    Developed by Daniel Dimitrov
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
