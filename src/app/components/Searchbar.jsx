import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Magnifier } from '../../resources/icons/icon-magnifier-grey.svg';
import { updateSearchTerm } from '../redux/actions';
import '../styles/App.scss';

function Searchbar(props) {
  let timeout = 0;

  const processSearch = (e) => {
    const { dispatchUpdateSearchTerm } = props;
    const searchText = e.target.value;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatchUpdateSearchTerm(searchText);
    }, 600);
  };

  return (
    <div className="search">
      <Magnifier className="magnifier" />
      <input type="search" placeholder="Search movies..." className="search-input-field" onChange={processSearch} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = {
  dispatchUpdateSearchTerm: updateSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
