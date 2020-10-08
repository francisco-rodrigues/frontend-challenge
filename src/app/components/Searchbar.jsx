import React, { Component } from 'react';
import { ReactComponent as Magnifier } from '../../resources/icons/icon-magnifier-grey.svg';
import '../styles/App.scss';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div className="search">
        <Magnifier className="magnifier" />
        <input type="search" placeholder="Search movies..." className="search-input-field" />
      </div>
    );
  }
}

export default Searchbar;
