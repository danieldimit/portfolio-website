import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
    render() {
        return (
            <div className="container-content-page">
                <h1>Studio</h1>
                <hr />
                <div>
                    Toskov Architects Ltd is  award winning architectural studio specialized in the design of
                    residential, commercial and mixed-used buildings. Our design is distinguished with creativity,
                    smart solutions and high efficiency...
                </div>

                <h1>Founder & CEO</h1>
                <hr />
                <div>
                    Aleksandar Toskov, 29 years old, an architect. He started his education in the field of
                    architecture at the age of 14, when his professional development began, passing through
                    many job positions and stages in the design. His development and experience has built him
                    up as a young architect with broad professional knowledge.
                </div>
                <div className="row">
                    <div
                        className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <img className="cv-img"
                             onClick={() => this.setState({
                                 photoIndex: 0, isOpen: true })}
                             src="img/about/toskov.jpg"/>
                    </div>
                    <div
                        className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                        <table>
                            <tr>
                                <td className="cv-left-column cv-bold">Jun 2017</td>
                                <td><div className="cv-bold">Architect, ARB</div>
                                    Architects Registration Board, London
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-left-column cv-bold">Jun 2017</td>
                                <td><div className="cv-bold">Chartered Architect, RIBA </div>
                                    Royal Institute of British Architects, London
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-left-column cv-bold">May 2017</td>
                                <td><div className="cv-bold">Architect, CAB Full Legal Design Capacity </div>
                                    Chamber of Architects in Bulgaria, Sofia
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-left-column cv-bold">Feb 2014</td>
                                <td><div className="cv-bold">Master of Architecture</div>
                                    University of Architecture, Civil Engineering and Geodesy, Sofia
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-left-column cv-bold">Sep 2008</td>
                                <td><div className="cv-bold">Construction Technician</div>
                                    Sofia High School of Civic Engineering, Architecture and Geodesy
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-left-column cv-bold">Sep 2007</td>
                                <td><div className="cv-bold">Constructor of Interior and Exterior Design </div>
                                    Sofia High School of Civic Engineering, Architecture and Geodesy
                                </td>
                            </tr>
                            <tr>
                                <td className="cv-left-column cv-bold">Jun 2007</td>
                                <td><div className="cv-bold">Insulation and Waterproofing in Construction </div>
                                    Bulgarian Association for Construction Insulation and Waterproofing
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <h1>Career</h1>
                <hr />
                <div>
                    There are no currently vacant positions. However, we are always keen to receive outstanding applications
                    from graduates and Architects to join the team at Toskov Architects. Please send your CV and
                    Portfolio and References to the address&nbsp;
                    <a  href="mailto:job@toskovarchitects.com">
                        job@toskovarchitects.com
                    </a>&nbsp;(max 10mb)

                </div>
            </div>
        );
    }
}

export default About;
