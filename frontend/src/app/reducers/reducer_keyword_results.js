import {} from "../actions/index";

import {FETCH_KEYWORD_RESULTS, CLEAR_KEYWORD_RESULTS} from '../actions/types';

const INITIAL_STATE = {results: [], xhrFinished: false};

export default function (state, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE
    }

    switch (action.type) {
        case FETCH_KEYWORD_RESULTS:
            if(action.payload){
                return {
                    results: action.payload.data.map((elem) => {

                        elem.graphStatus = 'not analysed';
                        return elem;
                    }),
                    xhrFinished: true

                };
            } else{
                return {
                    INITIAL_STATE
                }
            }
        case CLEAR_KEYWORD_RESULTS:
            return INITIAL_STATE;
        default:
            return state;
    }
}