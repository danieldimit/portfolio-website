import React, { Component } from 'react';
import {Helmet} from "react-helmet";
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
        this.props.setBreadcrumbState(2);
        this.props.fetchKeywordResults();
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
            <div
                key={data.tweet_id}
                className="aa col-lg-3 col-md-4 col-sm-6 col-xs-12">

                <div className="aba">
                    <i className="loading fa fa-spinner fa-pulse fa-3x fa-fw" />
                    <TweetEmbed
                        className="tweetWrapper"
                        id={data.tweet_id}
                        options={{ cards: 'hidden', width: 300 }}
                    />
                    <div
                        className={this.evalAnalysisStatusColor(
                            data.graphStatus
                        )}>
                        Status: {data.graphStatus}
                    </div>
                    <button
                        className={this.evalButtonClass(data.graphStatus)}
                        onClick={() => {
                            if (data.graphStatus === 'analysed') {
                                browserHistory.push(
                                    '/analysis?id=' + data.tweet_id
                                );
                            }
                        }}>
                        Show Analysis
                    </button>
                </div>
            </div>
        );
    }

    render() {
        let tag = "";
        if (typeof window !== 'undefined') {
            let params = new URL(document.location).searchParams;
            tag = params.get('tag');
        }



        return (
            <div className="container keyword-results">
                <Helmet>
                    <title>Analysis FakeNewsGraph</title>
                    <meta property="og:type"
                          content="article" />
                    <meta property="og:title"
                          content={"FakeNewsGraph - Results for a certain Hashtag"}/>
                    <meta property="og:description"
                          content={"Choose a Tweet connected with a certain hashtag to visualize and analyse."} />
                    <meta property="og:image"
                          content="https://fakenewsgraph.de/img/meta/results.png" />

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@FakeNewsGraph"/>
                    <meta name="twitter:title" content="FakeNewsGraph - Results for a certain Hashtag"/>
                    <meta name="twitter:description"
                          content="Choose a Tweet connected with a certain hashtag to visualize and analyse."/>
                    <meta name="twitter:image" content="https://fakenewsgraph.de/img/meta/results.png"/>
                </Helmet>
                <div
                    className={
                        this.props.counter > 0
                            ? 'alert alert-success'
                            : 'alert alert-danger'
                    }
                    data-toggle="popover"
                    data-content="This is the number of Tweets on this page for which we already calculated the graphs and have some statistics. Only for these Tweets you can click the 'show analysis' button, so if there are no Tweets analysed, please come back later and have a look at another keyword"
                    data-placement="bottom"
                    data-trigger="hover"
                    data-container="body">
                    There are <strong>{this.props.counter}</strong> results with
                    status "analysed" for <strong>#{tag}</strong>
                </div>
                <div id="main-loading">
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
                    <p>Loading results for selected keyword.</p>
                </div>

                <div className="row equal-length-fix">
                    {this.props.results.map(this.renderResults)}
                    <div className="clearfix" />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // shows how many results have finished graphs
    let counter = 0;
    let results = state.keywordResults.results;

    if (state.keywordResults.xhrFinished) {
        // eval this.props.results and this.props.counter
        // look for every tweet if the graph has been calculated
        results = state.keywordResults.results.map(elem => {
            state.calcedGraphs.graphs.forEach(id => {
                if (id === elem.tweet_id) {
                    //count tweets with status analysed
                    counter++;
                    elem.graphStatus = 'analysed';
                }
            });

            return elem;
        });

        let spinner = document.getElementById('main-loading');
        spinner.classList.add('hidden');
    }

    return {
        counter: counter,
        results
    };
}

export default connect(mapStateToProps, {
    fetchKeywordResults,
    clearKeywordResults,
    setBreadcrumbState,
    fetchCalcedGraphs
})(Results);
