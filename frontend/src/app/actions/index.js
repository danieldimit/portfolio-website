import axios from 'axios';
import {
    SET_BREADCRUMB_STATE,
    FETCH_PROJECTS,
    FETCH_TWEET_STATS,
    FETCH_CALCED_GRAPHS,
} from './types';

import { backendUrl } from '../config';

export function fetchProjects() {
    let request = axios.get(backendUrl + '/projects');
    console.log("HEHEHEHEHEHc>>>>>>>>> ", request);

    return {
        type: FETCH_PROJECTS,
        payload: request
    };
}

export function fetchTweetStats(location) {
    let request;
    let id;
    if (typeof window !== 'undefined') {
        let params = new URL(document.location).searchParams;
        let id = params.get('id');
        request = axios.get('http://165.227.144.106:4000/project?id=' + id);
    }

    return {
        type: FETCH_TWEET_STATS,
        payload: request
    };
}

export function fetchCalcedGraphs() {
    const request = axios.get('http://165.227.144.106:4000/projects');
    return {
        type: FETCH_CALCED_GRAPHS,
        payload: request
    };
}

export function clearKeywordResults() {
    return {
        type: CLEAR_KEYWORD_RESULTS
    }
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
