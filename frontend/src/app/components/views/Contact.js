import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import styled from 'styled-components';

import { Link } from 'react-router';

import Header from '../Header';
import Footer from '../Footer';

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

                        <hr/>
                        <header class="heading heading-h3">
                            <h3 className="header-smaller-padding">Get in touch! We would love to hear from you!</h3>
                        </header>

                        <p>You can find us on:</p>
                        <br/>

                        <div className="row" id="contact-items">
                                <div className="contact-email">
                                    <a href="mailto:kontakt@fakenewsgraph.de">
                                        kontakt@fakenewsgraph.de
                                    </a>
                                </div>
                            <br/>
                                <div className="contact-twitter">
                                    <a
                                        href="https://twitter.com/FakeNewsGraph"
                                        target="_blank">
                                        FakeNewsGraph
                                    </a>
                                </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

/**
 * <div className="contact-section">
 <div className="container">
 <form>
 <div className="col-md-6 col-sm-12">
 <div className="form-group">
 <label htmlFor="exampleInputEmail">Email Adresse</label>
 <input type="email" className="form-control" id="exampleInputEmail"
 placeholder=" Gib deine Email-Adresse ein"/>
 </div>
 <div className="form-group">
 <label htmlFor="exampleInputUsername">Deiner Name (optional)</label>
 <input type="text" className="form-control" id="" placeholder=" Gib deinen Name ein"/>
 </div>
 <div className="form-group">
 <label htmlFor="telephone">Telefon Nummer (optional)</label>
 <input type="tel" className="form-control" id="telephone" placeholder=" Gib dein Telefonnummer ein"/>
 </div>
 </div>
 <div className="col-md-6 col-sm-12 form-line">
 <div className="form-group">
 <label htmlFor ="description"> Nachricht</label>
 <textarea  className="form-control" id="description" placeholder="Gib deine Nachricht ein"></textarea>
 </div>
 <div>

 <button type="button" className="btn btn-default submit">
 <i className="fa fa-paper-plane" aria-hidden="true"></i>  Schicken
 </button>
 </div>

 </div>
 </form>
 </div>
 </div>
 */
export default Contact;
