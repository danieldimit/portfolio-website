import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
    fetchCalcedGraphs,
    setBreadcrumbState,
    fetchProjects
} from '../actions/index';
import { backendUrl } from '../config';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.renderProjectGrid = this.renderProjectGrid.bind(this);
        this.state = {
            selected : '',
            filter: ''
        }
    }


    static needs = [() => setBreadcrumbState, () => fetchProjects];

    componentDidMount() {

        this.props.fetchCalcedGraphs();
    }

    //
    setFilter(filter) {
        this.state = {selected  : filter};
        this.props.onChangeFilter(filter);
    }
    isActive(value){
        return 'btn '+((value===this.state.selected) ?'active':'default');
    }

    // Other
        changeFilter(filter) {
        this.state = {
            filter: filter
        };
    }

    renderProjectGrid(data) {

        return (
            <div key={data._id} onClick={() => browserHistory.push('/projects/project?id=' + data._id)}
                 className="col-lg-3 col-md-4 col-sm-6 col-xs-12 grid-margin">
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



    handleSort(aha) {
        console.log(aha);
    }

    render() {

        return (
            <div>
                <div className="container-content-page projects-header-filter">
                    <h1>Projects</h1>
                    <hr />
                    <button className={this.isActive('')} onClick={this.setFilter.bind(this, '')}>All</button>
                    <button className={this.isActive('male')} onClick={this.setFilter.bind(this, 'male')}>male</button>
                    <button className={this.isActive('female')} onClick={this.setFilter.bind(this, 'female')}>female</button>
                    <button className={this.isActive('child')} onClick={this.setFilter.bind(this, 'child')}>child</button>
                    <button className={this.isActive('blonde')} onClick={this.setFilter.bind(this, 'blonde')}>blonde</button>
                    <ul id="radio-btn-category" className="text-cap">
                        <li onClick={() => this.handleSort("all")}>all</li>
                        <li onClick={() => this.handleSort("residential")}>residential</li>
                        <li onClick={() => this.handleSort("workplace")}>workplace</li>
                        <li onClick={() => this.handleSort("mixed")}>mixed</li>
                    </ul>
                </div>
                <div className="row grid-projects projects-container">
                    {this.props.results.map(this.renderProjectGrid)}

                </div>
            </div>


        );
    }
}
function mapStateToProps(state) {
    let results = state.calcedGraphs.graphs.slice(0, 49);
    return {
        results
    };
}

export default connect(mapStateToProps, {
    fetchCalcedGraphs,
    setBreadcrumbState,
    fetchProjects
})(Projects);