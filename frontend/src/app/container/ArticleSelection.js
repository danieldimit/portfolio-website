import React, {Component} from "react";
import {Helmet} from "react-helmet";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchKeywordArticles, setBreadcrumbState} from "../actions/index";
import {Link, browserHistory} from "react-router";

class ArticleSelection extends Component {
    static needs = [
        setBreadcrumbState,
        fetchKeywordArticles
    ];

    constructor(props) {
        super(props);
        this.logsth = this.logsth.bind(this);
    }

    componentWillMount() {
        this.props.setBreadcrumbState(2);
        this.props.fetchKeywordArticles();
    }

    renderArticleSelectionOld(data){
        return(
            <tr key={data.id} onClick={() => browserHistory.push('/analysis?id=' + data.id)}>
                <td>{data.date}</td>
                <td>{data.retweets}</td>
                <td>{data.source}</td>
            </tr>


        )
    }

    logsth() {
        return "a";
    }

    renderArticleSelection(result) {

        // 1. Get the short source name
        var hostname;
        var url = result.source;

        //find & remove protocol (http, ftp, etc.) and get hostname
        if (url.indexOf("://") > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }

        //find & remove port number
        hostname = hostname.split(':')[0];
        //find & remove "?"
        hostname = hostname.split('?')[0];

        var domain = hostname,
            splitArr = domain.split('.'),
            arrLen = splitArr.length;

        //extracting the root domain here
        if (arrLen > 2) {
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        }

        // 2. Return a rendered element
        return(
            <div key={result.id} className="side-pad col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="clickable-article col-lg-12">
                    <div className="thumbnail-container">
                        <Link to={`/analysis?id=${result.id}`}>
                            <img className="article-thumbnail" src={result.thumbnail}/>
                        </Link>
                    </div>

                    <div className="article-info">
                        <Link to={`/analysis?id=${result.id}`}>
                            <h3> {result.title} </h3>
                        </Link>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Source: &nbsp;
                                        <Link to={`/analysis?id=${result.source}`}>
                                            {domain}
                                        </Link>
                                    </td>
                                    <td className="text-right">  Retweets: {result.retweets} </td>
                                </tr>

                                <tr>
                                    <td colSpan="2"> Date: {result.date} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <div className='row equal-length-fix' id="grid-container">
                    {this.props.results.map(this.renderArticleSelection)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('curr state in component:', state);

    return {
        results: state.keywordArticles.results,
    };

};

export default connect(mapStateToProps, {fetchKeywordArticles, setBreadcrumbState})(ArticleSelection);

