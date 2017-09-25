import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBreadcrumbState } from '../actions/index';

import { Carousel } from 'react-responsive-carousel';// carousel styles

class Project extends Component {
    static needs = [setBreadcrumbState];

    componentWillMount() {
        this.props.setBreadcrumbState(3);
    }

    render() {
        return (
            <div className="container-content-page project-page">
                <h1>Sample Project</h1>

                <Carousel
                    showArrows={true}
                    useKeyboardArrows
                    showStatus={false}
                    showThumbs={false}
                    dynamicHeight
                    autoPlay interval={3000} infiniteLoop>
                    <div>
                        <img src="img/about/project.jpg" />
                    </div>
                    <div>
                        <img src="img/about/project.jpg" />
                    </div>
                    <div>
                        <img src="img/about/project.jpg" />
                    </div>
                </Carousel>

                <h5 className="project-building-type"><b>Residential Building</b></h5>
                <hr/>
                <div>
                    <p>
                        The building consists of 16 apartments and semi-underground garage for 18 vehicles.
                        The first floor is 150 cm above the ground level, which allows the underground parking
                        places to be opened to the site with no HVAC installations equirements. The planning efficiently
                        uses the exposures, situating all apartments predominantly without north sides of the building.
                        To the north are placed all the required auxiliary rooms, storages, the entrance with a
                        staircase and an elevator.
                    </p>
                    <p>
                        <table>
                            <tbody id="project-table">
                                <tr>
                                    <th>Works</th>
                                    <td>New Build</td>
                                </tr>
                                <tr>
                                    <th>Investor</th>
                                    <td>Private</td>
                                </tr>
                                <tr>
                                    <th>Year</th>
                                    <td>2017</td>
                                </tr>
                                <tr>
                                    <th>Status </th>
                                    <td>Schematic Design </td>
                                </tr>
                                <tr>
                                    <th>TGA</th>
                                    <td>3200sq.m.</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </div>
            </div>
        );
    }
}

export default connect(null, { setBreadcrumbState })(Project);
