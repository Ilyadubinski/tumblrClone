import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SearchItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, text, id } = this.props.post

        return (
          <div className="results-container">
            <li>
              <Link
                to={`/posts/${id}`}
                onClick={this.props.clearSearch}
                className="searchWord"
              >
                {title}
              </Link>
            </li>
          </div>
        );
    }
}