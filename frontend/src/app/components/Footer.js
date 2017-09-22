import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div id="pre-footer">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-6 col-md-6 col-sm-6 col-xs-12 side-pad"
                                id="footer-about">
                                <div className="contact-email">
                                    <h2>Write an E-Mail</h2>
                                    <a
                                        className="btn btn-ti-on-dark"
                                        href="mailto:kontakt@fakenewsgraph.de">
                                        kontakt@fakenewsgraph.de
                                    </a>
                                </div>
                            </div>
                            <div
                                className="col-lg-6 col-md-6 col-sm-6 col-xs-12 side-pad"
                                id="footer-contact">
                                <div className="contact-twitter">
                                    <h2>Follow us on Twitter</h2>
                                    <a
                                        className="btn btn-ti-on-dark"
                                        href="https://twitter.com/FakeNewsGraph"
                                        target="_blank">
                                        FakeNewsGraph
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="rights-and-credits">&copy; fakenewsgraph.de 2017</div>
            </footer>
        );
    }
}

export default Footer;
