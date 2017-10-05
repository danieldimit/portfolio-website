import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
    fetchRelevantProjects,
    setBreadcrumbState
} from '../actions/index';
import { backendUrl } from '../config';

class RelatedProjects extends Component {

    constructor(props) {
        super(props);
        this.renderProjectGrid = this.renderProjectGrid.bind(this);
    }


    static needs = [() => setBreadcrumbState];

    componentDidMount() {
        this.props.fetchRelevantProjects();
    }

    renderProjectGrid(data) {

        return (
            <div key={data._id} onClick={() => browserHistory.push('/projects/project?id=' + data._id)}
                 className="col-lg-4 col-md-4 col-sm-6 col-xs-12 grid-margin">
                <div className="project-container">
                    <img src={backendUrl + data.thumbnailLoc }/>

                    <div className="thumbnail-header">
                        <div className="thumbnail-subcontainer">
                            <h5 className="thumbnail-type text-cap">
                                {data.buildingType}
                            </h5>
                            <h5 className="thumnail-title">
                                {data.title}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

    render() {

        return (
            <div className="container-content-page home-page-topbottom-margin">
                <h1>Relevant Projects</h1>
                <hr />
                <div className="row grid-projects">
                    {this.props.results.map(this.renderProjectGrid)}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    let results = state.relevantProjects.graphs.slice(0, 49);

    return {
        results
    };
}

export default connect(mapStateToProps, {
    fetchRelevantProjects,
    setBreadcrumbState
})(RelatedProjects);