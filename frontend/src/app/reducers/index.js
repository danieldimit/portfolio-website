import { combineReducers } from 'redux';
import BreadcrumbReducer from "./reducer_breadcrumb";
import ProjectsReducer from "./reducer_projects";
import TweetStatsReducer from './reducer_tweet_stats';
import calcedGraphsReducer from './reducer_calced_graphs';


const rootReducer = combineReducers({
    breadcrumb: BreadcrumbReducer,
    projects: ProjectsReducer,
    tweetStats: TweetStatsReducer,
    calcedGraphs: calcedGraphsReducer
});


export default rootReducer;
