import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Magnifier } from '../../resources/icons/icon-magnifier-grey.svg';
import { updateSearchTerm } from '../redux/actions';
import '../styles/App.scss';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.timeout = 0;
  }

  processSearch = (e) => {
    const { dispatchUpdateSearchTerm } = this.props;
    const searchText = e.target.value;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      dispatchUpdateSearchTerm(searchText);
    }, 600);
  }

  render() {
    return (
      <div className="search">
        <Magnifier className="magnifier" />
        <input type="search" placeholder="Search movies..." className="search-input-field" onChange={this.processSearch} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = {
  dispatchUpdateSearchTerm: updateSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
