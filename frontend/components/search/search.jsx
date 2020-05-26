import React from 'react';
import SearchItem from './search_item';
// WHENEVER I TRY TO PUT SEARCH ICON IN GET ERROR

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = { 
            searchKey: "",
            active: false 
        
        };
        // debugger 

    }

      handleClick(event) {
        event.currentTarget.className = "search-container-clicked";
        this.setState({ active: true }, () => document.addEventListener("click", this.handleClose));
    }

    handleClose(event) {
        this.setState({active: false}, () => document.removeEventListener("click", this.handleClose));
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ searchKey: e.currentTarget.value })
        if (e.currentTarget.value !== "") {
            this.props.search(e.currentTarget.value);
        } else {
            this.props.clear();
        }
    }

    clearSearch() {
        this.setState({ searchKey: "" });
        this.props.clear();
    }

    handleBlur() {
        this.sleep(150).then(this.clearSearch);
    }

    // hacky
    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    render() {

        return (
          <div className="search" onClick={this.handleClick}>
            <i className="fas fa-search"></i>
            <input
              type="text"
              value={this.state.searchKey}
              onChange={this.handleChange}
              placeholder="Search"
              //   className="search-bar"
              onBlur={this.handleBlur}
              //   onClick={this.handleClick}
            />
            {/* <div className="search-results"> */}

           
                {this.props.posts.map((post) => (
                  <SearchItem
                    post={post}
                    key={post.id}
                    clearSearch={this.clearSearch}
                  />
                ))}
            {/* </div> */}
          </div>
        );
    }
}