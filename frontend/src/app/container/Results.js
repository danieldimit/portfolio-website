import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {
    fetchKeywordResults,
    clearKeywordResults,
    setBreadcrumbState,
    fetchCalcedGraphs
} from '../actions/index';
import { browserHistory } from 'react-router';
import TweetEmbed from '../components/TweetEmbed';
import { createScriptNode } from '../scriptTags';

class Results extends Component {
    constructor(props) {
        super(props);
        this.renderResults = this.renderResults.bind(this);
        this.evalButtonClass = this.evalButtonClass.bind(this);
        this.evalAnalysisStatusColor = this.evalAnalysisStatusColor.bind(this);
    }
    static needs = [() => setBreadcrumbState, () => fetchKeywordResults];

    componentDidMount() {
        if (typeof window !== 'undefined') {
            createScriptNode('js/results.js', false);
        }

        this.props.fetchCalcedGraphs();
    }

    componentWillUnmount() {
        this.props.clearKeywordResults();
    }

    evalButtonClass(status) {
        const baseClass = 'bot-align btn btn-default';
        if (status === 'analysed') {
            return baseClass;
        } else {
            return baseClass + ' disabled';
        }
    }

    evalAnalysisStatusColor(status) {
        if (status === 'analysed') {
            return 'alert alert-success';
        } else {
            return 'alert alert-danger';
        }
    }

    renderResults(data) {
        return (
            <div key={data} className="aa col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="aba">
                    <i className="loading fa fa-spinner fa-pulse fa-3x fa-fw" />
                    <TweetEmbed
                        className="tweetWrapper"
                        id={data}
                        options={{ cards: 'hidden', width: 300 }}
                    />

                    <button
                        className="bot-align btn btn-default"
                        onClick={() => {
                            browserHistory.push('/analysis?id=' + data);
                        }}>
                        Show Analysis
                    </button>
                </div>
            </div>
        );
    }

    render() {
        let tag = '';
        if (typeof window !== 'undefined') {
            let params = new URL(document.location).searchParams;
            tag = params.get('tag');
        }

        return (
            <div>
                <Helmet>
                    <title>Analysis FakeNewsGraph</title>
                    <meta property="og:type" content="article" />
                    <meta
                        property="og:title"
                        content={
                            'FakeNewsGraph - Results for a certain Hashtag'
                        }
                    />
                    <meta
                        property="og:description"
                        content={
                            'Choose a Tweet connected with a certain hashtag to visualize and analyse.'
                        }
                    />
                    <meta
                        property="og:image"
                        content="https://fakenewsgraph.de/img/meta/chooseTweet.png"
                    />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@FakeNewsGraph" />
                    <meta
                        name="twitter:title"
                        content="FakeNewsGraph - Results for a certain Hashtag"
                    />
                    <meta
                        name="twitter:description"
                        content="Choose a Tweet connected with a certain hashtag to visualize and analyse."
                    />
                    <meta
                        name="twitter:image"
                        content="https://fakenewsgraph.de/img/meta/chooseTweet.png"
                    />
                </Helmet>

                <h1 className="bg-header">Analyze a Tweet</h1>

                <div className="container keyword-results">
                    <p className="bg-info">
                        Click on a "Show Analysis" button below a Tweet to see
                        it's diffusion.
                    </p>
                    <div className="row equal-length-fix">
                        {this.props.results.map(this.renderResults)}
                        <div className="clearfix" />
                    </div>
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
    fetchKeywordResults,
    clearKeywordResults,
    setBreadcrumbState,
    fetchCalcedGraphs
})(Results);
