import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { fetchHashtags } from '../actions/index';
import { browserHistory } from 'react-router';


let languages = [];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : languages.filter(lang =>
        lang.Hashtag.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.Hashtag;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div>
        {suggestion.Hashtag}
    </div>
);


class SearchField extends Component {

    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: []
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    static needs = [() => fetchHashtags];

    componentDidMount() {
        this.props.fetchHashtags();

    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    handleClick() {
        if (this.refs.InputField.input.defaultValue !== null) {
            var input = this.refs.InputField.input.defaultValue;
            browserHistory.push("/results?tag=" + input);
        }
    }

    render() {
        if (typeof this.props.hashtags !== 'undefined') {
            languages = this.props.hashtags['HashtagsData'];
        }

        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Search for terms or hashtags',
            value,
            onChange: this.onChange
        };


        // Finally, render it!
        return (
            <div id="search-container">
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <Autosuggest
                                ref="InputField"
                                id="autoSuggest"
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                            />
                        </td>
                        <td>
                            <i id="search-icon" onClick={this.handleClick} className="fa fa-search fa-lg" aria-hidden="true"></i>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('curr state in SearchField:', state);

    return {
        hashtags: state.hashtags.results
    };
}

export default connect(mapStateToProps, {fetchHashtags})(SearchField);




