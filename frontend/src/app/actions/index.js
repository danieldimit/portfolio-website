import axios from 'axios';
import {
    SET_BREADCRUMB_STATE,
    FETCH_KEYWORDS,
    FETCH_KEYWORD_RESULTS,
    CLEAR_KEYWORD_RESULTS,
    FETCH_KEYWORD_ARTICLES,
    FETCH_HASHTAGS,
    FETCH_TWEET_STATS,
    FETCH_CALCED_GRAPHS
} from './types';

import { backendUrl, googleDocs } from '../config';

export function fetchKeywords() {
    let request = axios.get(backendUrl + '.json');

    return {
        type: FETCH_KEYWORDS,
        payload: request
    };
}

export function fetchKeywordResults() {
    let request;
    if (typeof window !== 'undefined') {
        let params = new URL(document.location).searchParams;
        //let tag = params.get('tag');
        let tag = 'angelamerkel';
        request = axios.get(backendUrl + 'db/hashtags/' + tag + '/50');
    }

    return {
        type: FETCH_KEYWORD_RESULTS,
        payload: request
    };
}


export function clearKeywordResults() {
    return {
        type: CLEAR_KEYWORD_RESULTS
    }
}

export function fetchCalcedGraphs() {
    const request = axios.get(backendUrl + 'graphs/');
    return {
        type: FETCH_CALCED_GRAPHS,
        payload: request
    };
}

export function fetchKeywordArticles() {
    let request = axios.get('/static-api-req/articles.json');

    return {
        type: FETCH_KEYWORD_ARTICLES,
        payload: request
    };
}

export function fetchHashtags() {
    let request = axios.get(googleDocs);

    return {
        type: FETCH_HASHTAGS,
        payload: request
    };
}

export function fetchTweetStats(location) {
    let request;
    let id;
    if (typeof window !== 'undefined') {
        let params = new URL(document.location).searchParams;
        let id = params.get('id');
        request = axios.get(backendUrl + 'stats/' + id);
    }

    return {
        type: FETCH_TWEET_STATS,
        payload: request
    };
}

export function setBreadcrumbState(step) {
    let tip;
    switch (step) {
        case 1:
            tip =
                'Select the hashtag from the cloud or type in custom one to see the most retweetet Tweets containing keyword';
            break;
        case 2:
            tip = "Select an article to visualize it's diffusion ";
            break;
        case 3:
            tip = 'Engage with the visualization ';
            break;
        default:
            tip =
                'Select the hashtag from the cloud or type in custom one to see the most retweetet Tweets containing keyword';
    }

    return {
        type: SET_BREADCRUMB_STATE,
        progressStep: step,
        progressTip: tip
    };
}
