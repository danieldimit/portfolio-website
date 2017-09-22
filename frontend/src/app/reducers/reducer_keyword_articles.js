import {} from "../actions/index";

import {FETCH_KEYWORD_ARTICLES} from '../actions/types';

const INITIAL_STATE = {results: []};

export default function (state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case FETCH_KEYWORD_ARTICLES:
            console.log('updating state', action.payload.data.results);
            return {
                results: action.payload.data.results
            };
        default:
            return state;
    }
}