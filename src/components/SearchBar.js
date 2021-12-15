import React from "react";

class SearchBar extends React.Component {

    state = { term: '' }

    onFormSubmit = (event) => {

        event.preventDefault();

        // console.log(event);

        this.props.onSearchSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={ this.onFormSubmit } className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={ (event) => this.setState( { term: event.target.value } )}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;