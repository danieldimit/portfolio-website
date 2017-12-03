import React, { Component } from 'react';

var $ = require ('jquery');

class Footer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        };
    }



    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        if ($ !== 'undefined') {
            $('body,html').scrollTop(0, 800);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.state = {
            scrollTop: ($(window).scrollTop())
        };
    }

    scrollToTop() {
        $('body,html').animate({scrollTop: 0}, 800);
    }



    render() {
        if (this.state.scrollTop < this.props.offset) {
            return null;
        }

        return (
            <div>
                <div id="footer-white-background">
                    <div id="back-to-top-btn" onClick={this.scrollToTop}><span></span>Back to top</div>
                </div>

                <footer>
                    <div id="pre-footer">
                        <div className="container-footer">
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
                                        <a href="https://www.architecture.com/"
                                           target="_blank">
                                            <img src="img/logos/riba-logo-2l.png"/>
                                        </a>
                                        <a href="http://www.arb.org.uk/"
                                           target="_blank">
                                            <img src="img/logos/arb-logo-bl.png"/>
                                        </a>
                                        <a href="http://kab.bg/"
                                           target="_blank">
                                            <img src="img/logos/cab-logo-l.png"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-footer" id="rights-and-credits">
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
