import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBreadcrumbState } from '../actions/index';
import { browserHistory } from 'react-router';
import {
    createD3ScriptNode,
    createD3CloudScriptNode,
    createWordCloudScriptNode
} from '../scriptTags';

class Wordcloud extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    static needs = [setBreadcrumbState];

    componentDidMount() {
        if (typeof window !== 'undefined') {
            createD3ScriptNode();
            createD3CloudScriptNode();
            createWordCloudScriptNode();
        }

        this.props.setBreadcrumbState(1);
    }

    handleChange(event) {
        if (this.refs.HiddenField !== null) {
            var input = this.refs.HiddenField;
            this.setState({hashtag: input});
            browserHistory.push("/results?tag=" + input.value);
        }
    }

    render() {
        return (
            <div>
                <div className="side-pad" id="wordcloud-container">
                    <i className="loading fa fa-spinner fa-pulse fa-3x fa-fw"/>
                    <svg id="wordcloud" />
                    <input id="hidden-search-field" type="text" ref="HiddenField"
                           value={this.state.value} onClick={this.handleChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default connect(null, { setBreadcrumbState })(Wordcloud);
