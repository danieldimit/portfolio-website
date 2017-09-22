import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { setBreadcrumbState, fetchTweetStats } from '../actions/index';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import {
    createD3ScriptNode,
    createSigmaScriptNode,
    createSigmaJSONParserScriptNode,
    createSigmaAnimateScriptNode,
    createSigmaNoOverlapScriptNode,
    createSigmaForceAtlasScriptNode,
    createAnalysisScriptNode,
    createScriptNode
} from '../scriptTags';
import TweetEmbed from 'react-tweet-embed';

class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = { tweetId: undefined };
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            createD3ScriptNode(false);
            createSigmaScriptNode(false);
            createSigmaJSONParserScriptNode(false);
            createSigmaAnimateScriptNode(false);
            createSigmaNoOverlapScriptNode(false);
            createSigmaForceAtlasScriptNode(false);
            createScriptNode('js/sigma/plugins/sigma.plugins.tooltips.js');
            createScriptNode(
                'js/sigma/plugins/sigma.renderers.snapshot.min.js'
            );
            createScriptNode('js/modules/Graph.js', false);
            createAnalysisScriptNode(false);
            createScriptNode('js/legend.js', false);
            createScriptNode('js/linechart.js', false);
            this.setState({
                tweetId: this.getParam('id')
            });
        }
        this.props.fetchTweetStats();
        this.props.setBreadcrumbState(3);
    }

    getParam(paramName) {
        let result = null,
            tmp = [];
        let items = window.location.search.substr(1).split('&');
        for (let index = 0; index < items.length; index++) {
            tmp = items[index].split('=');
            console.log('key:', tmp[0]);
            if (tmp[0] === paramName) result = decodeURIComponent(tmp[1]);
        }
        console.log(result);
        return result;
    }

    renderLanguages(data) {
        if (data !== null && data !== undefined) {
            const keys = Object.keys(data);

            let dataAsArray = [];
            keys.forEach(function(key) {
                const langObj = { lang: key, percentage: data[key] };
                dataAsArray.push(langObj);
            });

            function langToJSX(data) {
                return (
                    <div key={data.lang}>
                        <dt>
                            {data.lang}:
                        </dt>
                        <dd>
                            {('' + data.percentage).slice(0, 6)}%
                        </dd>
                    </div>
                );
            }

            const markup = dataAsArray.map(langToJSX);
            return markup;
        } else {
            return <div />;
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Analysis FakeNewsGraph</title>
                    <meta property="og:type" content="article" />
                    <meta
                        property="og:title"
                        content={
                            'FakeNewsGraph - Analysis and Graph of the spread of a Tweet'
                        }
                    />
                    <meta
                        property="og:description"
                        content="Quantitive and temporal visualization of how a Tweet spread through
                          Twitter. The visualization by FakeNewsGraph is also accompanied by helpful statistics
                          about the Retweeters demographics."
                    />
                    <meta
                        property="og:image"
                        content="https://fakenewsgraph.de/img/meta/analysis.png"
                    />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@FakeNewsGraph" />
                    <meta
                        name="twitter:title"
                        content="FakeNewsGraph - Analysis and Graph of the spread of a Tweet"
                    />
                    <meta
                        name="twitter:description"
                        content="Quantitive and temporal visualization of how a Tweet spread through
                          Twitter. The visualization by FakeNewsGraph is also accompanied by helpful statistics
                          about the Retweeters demographics."
                    />
                    <meta
                        name="twitter:image"
                        content="https://fakenewsgraph.de/img/meta/analysis.png"
                    />
                </Helmet>

                <h1 className="bg-header">Analysis</h1>

                <div className="container">
                    <div>
                        <div className="tweet-stats">
                            <h2 className="tweet-stats-heading">Tweet</h2>
                            <TweetEmbed
                                className="padding-result-element"
                                id={this.state.tweetId}
                            />
                            <h2 className="tweet-stats-heading">Statistics</h2>
                            <ListGroup>
                                <li
                                    className="list-group-item"
                                    data-toggle="popover"
                                    data-content="This is the percentage of users included in the analysis who have no profile picture"
                                    data-placement="right"
                                    data-trigger="hover"
                                    data-container="body">
                                    <dl className="dl-horizontal">
                                        <dt>No profile picture:</dt>
                                        <dd>
                                            {('' +
                                                this.props.tweetStats
                                                    .no_profile_img).slice(
                                                0,
                                                6
                                            )}%
                                        </dd>
                                    </dl>
                                </li>
                                <li
                                    className="list-group-item"
                                    data-toggle="popover"
                                    data-content="These are the languages included in the analysis and their percentages"
                                    data-placement="right"
                                    data-trigger="hover"
                                    data-container="body">
                                    <h4 className="list-group-item-heading">
                                        Languages
                                    </h4>
                                    <dl className="dl-horizontal">
                                        {this.renderLanguages(
                                            this.props.tweetStats['lang_stats']
                                        )}
                                    </dl>
                                </li>
                                <li
                                    className="list-group-item"
                                    data-toggle="popover"
                                    data-content="This is the median of statuses count among the users included in the analysis"
                                    data-placement="right"
                                    data-trigger="hover"
                                    data-container="body">
                                    <dl className="dl-horizontal">
                                        <dt>Median statuses count:</dt>
                                        <dd>
                                            {
                                                this.props.tweetStats
                                                    .median_statuses_count
                                            }
                                        </dd>
                                    </dl>
                                </li>
                                <li
                                    className="list-group-item"
                                    data-toggle="popover"
                                    data-content="This is the percentage of users included in the graph who have no profile background picture"
                                    data-placement="right"
                                    data-trigger="hover"
                                    data-container="body">
                                    <dl className="dl-horizontal">
                                        <dt>No profile background:</dt>
                                        <dd>
                                            {('' +
                                                this.props.tweetStats
                                                    .no_profile_background).slice(
                                                0,
                                                6
                                            )}%
                                        </dd>
                                    </dl>
                                </li>
                                <li
                                    className="list-group-item"
                                    data-toggle="popover"
                                    data-content="This is the average age of an account counted in days"
                                    data-placement="right"
                                    data-trigger="hover"
                                    data-container="body">
                                    <dl className="dl-horizontal">
                                        <dt>Avarage account age:</dt>
                                        <dd>
                                            {('' +
                                                this.props.tweetStats
                                                    .average_accounts_age).slice(
                                                0,
                                                6
                                            )}
                                        </dd>
                                    </dl>
                                </li>
                                <li
                                    className="list-group-item"
                                    data-toggle="popover"
                                    data-content="This is the percentage of users included in the analysis who have no description added to their profile"
                                    data-placement="right"
                                    data-trigger="hover"
                                    data-container="body">
                                    <dl className="dl-horizontal">
                                        <dt>Users with no description:</dt>
                                        <dd>
                                            {('' +
                                                this.props.tweetStats
                                                    .no_description).slice(
                                                0,
                                                6
                                            )}%
                                        </dd>
                                    </dl>
                                </li>
                                <li
                                    className="list-group-item"
                                    data-toggle="popover"
                                    data-content="This is the number of interactions between users included  in the analysis. "
                                    data-placement="right"
                                    data-trigger="hover"
                                    data-container="body">
                                    <dl className="dl-horizontal">
                                        <dt>Interactions:</dt>
                                        <dd>
                                            {this.props.tweetStats.edges}
                                        </dd>
                                    </dl>
                                </li>
                                <li
                                    className="list-group-item"
                                    data-toggle="popover"
                                    data-content="This is the number of users included in the analysis"
                                    data-placement="right"
                                    data-trigger="hover"
                                    data-container="body">
                                    <dl className="dl-horizontal">
                                        <dt>Users:</dt>
                                        <dd>
                                            {this.props.tweetStats.nodes}
                                        </dd>
                                    </dl>
                                </li>
                                {/*       <li
                                className="list-group-item"
                                data-toggle="popover"
                                data-content="This is the number of users included in analysis compared with a total ammount"
                                data-placement="right"
                                data-trigger="hover"
                                data-container="body">
                                <dl className="dl-horizontal">
                                    <dt>Completness :</dt>
                                    <dd>
                                        {this.props.tweetStats.nodes *
                                            Math.random()
                                                .toFixed(2)
                                                .slice(0, 5)}%
                                    </dd>
                                </dl>
                            </li>*/}
                            </ListGroup>
                            <div className="stats-info">
                                <p className="small">
                                    Single statistic explanation available by
                                    moving over the item with the mouse.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div id="analysis">
                                <h2>Diffusiongraph</h2>
                                <span id="timer" />
                                <div id="spread-graph">
                                    <div className="contents">
                                        <div id="graph" unselectable="on">
                                            {' '}<i className="loading fa fa-spinner fa-pulse fa-3x fa-fw" />
                                        </div>
                                        <div id="info">
                                            <div id="legend">
                                                <div
                                                    id="legend-influence-overlay"
                                                    data-toggle="popover"
                                                    data-content="Size of the node depends on count of influenced retweeters"
                                                    data-placement="left"
                                                    data-trigger="hover"
                                                    data-container="body"
                                                />
                                                <div
                                                    id="legend-diffusion-overlay"
                                                    data-toggle="popover"
                                                    data-content="Position of the node depends on the depth of a message's diffusion. The biggest circle represents retweets of the initial tweet."
                                                    data-placement="left"
                                                    data-trigger="hover"
                                                    data-container="body"
                                                />
                                            </div>
                                            <div id="nodeInfo">
                                                <img
                                                    id="nodeInfoImg"
                                                    className="img-circle"
                                                    src="/img/48-48-placeholder.png"
                                                />
                                                <p
                                                    id="userName"
                                                    data-toggle="popover"
                                                    data-content="Username"
                                                    data-placement="left"
                                                    data-trigger="hover"
                                                    data-container="body">
                                                    Username
                                                </p>
                                                <dl>
                                                    <div
                                                        data-toggle="popover"
                                                        data-content="User's language"
                                                        data-placement="left"
                                                        data-trigger="hover"
                                                        data-container="body">
                                                        <dt>Language</dt>
                                                        <dd id="language">
                                                            User's language
                                                        </dd>
                                                    </div>
                                                    <div
                                                        data-toggle="popover"
                                                        data-content="User's Twitter join date"
                                                        data-placement="left"
                                                        data-trigger="hover"
                                                        data-container="body">
                                                        <dt>Join Date</dt>
                                                        <dd id="joinDate">
                                                            User's Twitter join
                                                            date
                                                        </dd>
                                                    </div>
                                                    <div
                                                        data-toggle="popover"
                                                        data-content="Number of followers"
                                                        data-placement="left"
                                                        data-trigger="hover"
                                                        data-container="body">
                                                        <dt>Followers</dt>
                                                        <dd id="follower">
                                                            User's number of
                                                            followers
                                                        </dd>
                                                    </div>
                                                    <div
                                                        data-toggle="popover"
                                                        data-content="Accumulated count of
                                                        users who might have
                                                        seen the tweet (range)."
                                                        data-placement="left"
                                                        data-trigger="hover"
                                                        data-container="body">
                                                        <dt>Range</dt>
                                                        <dd id="sumfollower">
                                                            Range of the tweet{' '}
                                                        </dd>
                                                    </div>
                                                    <div
                                                        data-toggle="popover"
                                                        data-content="This is the level of the diffusion of this Tweet in relation to the analysed Tweet. Hover the legend to get more explanation."
                                                        data-placement="left"
                                                        data-trigger="hover"
                                                        data-container="body">
                                                        <dt>Diffusion Level</dt>
                                                        <dd id="diffusionlvl">
                                                            Tweet's diffusion
                                                            level
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                        <div className="clearfix" />
                                        <div className="button-nav">
                                            <div className="start-stop">
                                                <button
                                                    id="play"
                                                    className="btn btn-icon fa fa-play"
                                                    data-toggle="popover"
                                                    data-content="Graph will develop over time"
                                                    data-placement="top"
                                                    data-trigger="hover"
                                                    data-container="body"
                                                />

                                                <button
                                                    id="stop"
                                                    className="btn btn-icon fa fa-stop"
                                                    data-toggle="popover"
                                                    data-content="Stop graph development"
                                                    data-placement="top"
                                                    data-trigger="hover"
                                                    data-container="body"
                                                />
                                            </div>
                                            <div className="download-wrapper">
                                                <button
                                                    id="download"
                                                    className="btn btn-icon fa fa-download"
                                                    data-toggle="popover"
                                                    data-content="Export data as .csv (Excel)"
                                                    data-placement="top"
                                                    data-trigger="hover"
                                                    data-container="body"
                                                />
                                                <button
                                                    id="snapshot"
                                                    className="btn btn-icon fa fa-camera"
                                                    data-toggle="popover"
                                                    data-content="Download graph as image"
                                                    data-placement="top"
                                                    data-trigger="hover"
                                                    data-container="body"
                                                />
                                                <button
                                                    id="help"
                                                    className="btn btn-icon fa fa-question"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                />
                                            </div>
                                            <div className="zoom">
                                                <button
                                                    id="zoom-in"
                                                    className="btn btn-icon fa fa-plus"
                                                    data-toggle="popover"
                                                    data-content="Zoom graph"
                                                    data-placement="top"
                                                    data-trigger="hover"
                                                    data-container="body"
                                                />
                                                <button
                                                    id="zoom-out"
                                                    className="btn btn-icon fa fa-minus"
                                                    data-toggle="popover"
                                                    data-content="Zoom graph"
                                                    data-placement="top"
                                                    data-trigger="hover"
                                                    data-container="body"
                                                />
                                            </div>
                                            <div className="clearfix" />
                                        </div>

                                        <div
                                            id="history"
                                            data-toggle="popover"
                                            data-content="Relation betweet time and amount of retweets"
                                            data-placement="top"
                                            data-trigger="hover"
                                            data-container="body">
                                            <i className="loading fa fa-spinner fa-pulse fa-3x fa-fw" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="modal fade"
                        id="myModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <p>
                                        This is the analysis of the Tweet you
                                        can see on the left side. The graph is a
                                        visualisation of a message's diffusion.
                                        It shows the possible influence paths
                                        based on a follow relation between
                                        retweeters of the root tweet.
                                    </p>
                                    <p>
                                        Each node represents a user. Mouse over
                                        the dots in the network and get
                                        contextual information for each node.
                                        You can also take a snapshot of a
                                        network or download the data as .csv for
                                        further analysis.
                                    </p>
                                    <p>
                                        Mouse over the statistics or the legend
                                        to get more explanation!
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-default"
                                        data-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        tweetStats: state.tweetStats.stats,
        id: state.tweetStats.id
    };
}

export default connect(mapStateToProps, {
    setBreadcrumbState,
    fetchTweetStats
})(Analysis);
