import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setBreadcrumbState } from '../actions/index';

class Breadcrumb extends Component {
    static needs() {
        return [setBreadcrumbState];
    }

    render() {
        //prevent dom manipulation when rendering serverside
        if (typeof window !== 'undefined') {
            // Removed this code because it causes bug on tablet devices
            // (3rd step should take the whole row, but with this it took only half of the row)
            /*
            //clean the class names of all elems
            let otherElems = document.getElementsByClassName('progress-step');
            console.log(otherElems);


            [].forEach.call(otherElems, function(elem) {
                elem.className =
                    'side-pad col-lg-4 col-md-4 col-sm-4 col-xs-6 progress-step';
            });
            */
            console.log('set progress step css');
            //add class to curr elem
            let currElem = document.getElementById(
                'step-' + this.props.progressStep
            );
            currElem ? (currElem.className += ' current-step') : null;
        }

        return (
            <div id="progress-bar">
                <div className="row" id="progress-steps">
                    <div
                        className="side-pad col-lg-4 col-md-4 col-sm-4 col-xs-6 progress-step"
                        id="step-1">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="enumeration">1</div>
                                    </td>
                                    <td>Search</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div
                        className="side-pad col-lg-4 col-md-4 col-sm-4 col-xs-6 progress-step"
                        id="step-2">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="enumeration">2</div>
                                    </td>
                                    <td>Select</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div
                        className="side-pad col-lg-4 col-md-4 col-sm-4 col-xs-12 progress-step"
                        id="step-3">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="enumeration">3</div>
                                    </td>
                                    <td>Visualize</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="side-pad" id="progress-tips">
                    {this.props.progressTip}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('curr state in component:', state);

    return {
        progressStep: state.breadcrumb.progressStep,
        progressTip: state.breadcrumb.progressTip
    };
}

export default connect(mapStateToProps, { setBreadcrumbState })(Breadcrumb);
