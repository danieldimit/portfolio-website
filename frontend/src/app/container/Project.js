import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBreadcrumbState } from '../actions/index';

class Project extends Component {
    static needs = [setBreadcrumbState];

    componentWillMount() {
        this.props.setBreadcrumbState(3);
    }

    render() {
        return (
            <div className="container-content-page">
                <h1>Sample Project</h1>
                <hr />
            </div>
        );
    }
}

export default connect(null, { setBreadcrumbState })(Project);
