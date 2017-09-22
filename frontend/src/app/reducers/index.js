import { combineReducers } from 'redux';
import BreadcrumbReducer from "./reducer_breadcrumb";
import KeywordReducer from "./reducer_keywords";
import HashtagsReducer from "./reducer_hashtags";
import KeywordResultReducer from './reducer_keyword_results';
import KeywordArticlesReducer from './reducer_keyword_articles';
import TweetStatsReducer from './reducer_tweet_stats';
import calcedGraphsReducer from './reducer_calced_graphs';

const rootReducer = combineReducers({
    breadcrumb: BreadcrumbReducer,
    keywords: KeywordReducer,
    hashtags: HashtagsReducer,
    keywordResults: KeywordResultReducer,
    keywordArticles: KeywordArticlesReducer,
    tweetStats: TweetStatsReducer,
    calcedGraphs: calcedGraphsReducer
});


export default rootReducer;
