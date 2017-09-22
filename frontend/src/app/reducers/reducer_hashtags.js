import {} from "../actions/index";

import {FETCH_HASHTAGS} from '../actions/types';

const INITIAL_STATE = {HashtagsData: []};

export default function (state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case FETCH_HASHTAGS:

            return {
                results: action.payload.data
            };
        default:
            return state;
    }
}