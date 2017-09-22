import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBreadcrumbState } from '../actions/index';

class Analysis extends Component {
    static needs = [setBreadcrumbState];

    componentWillMount() {
        this.props.setBreadcrumbState(3);
    }

    render() {
        return (
            <div className="row" id="analysis">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="retweeters">
                    <div className="col-lg-12">
                        <h3> Information über die Retweeters </h3>
                        <div className="contents"></div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" id="spread-over-time">
                    <div className="col-lg-12">
                        <h3> Ausbreitung über die Zeit </h3>
                        <div className="contents"></div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="spread-graph">
                    <div className="col-lg-12">
                        <h3> Ausbreitungsteilnehmergraph </h3>
                        <div className="contents"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { setBreadcrumbState })(Analysis);
