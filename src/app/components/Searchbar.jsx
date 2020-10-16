import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../redux/actions';
import { ReactComponent as Magnifier } from '../../resources/icons/icon-magnifier-grey.svg';
import { ReactComponent as MagnifierDisabled } from '../../resources/icons/icon-magnifier-disabled.svg';

import '../styles/Searchbar.scss';

function Searchbar(props) {
  const [isSearchDisabled, setIsSearchDisabled] = useState(false);
  let timeout = 0;

  const processSearch = (e) => {
    const { dispatchUpdateSearchTerm } = props;
    const searchText = e.target.value;
    if (timeout) clearTimeout(timeout);
    /* a delay is given before updating the search input which is reset if the user
      types another character, this avoids firing a new request everytime the user presses a key */
    timeout = setTimeout(() => {
      dispatchUpdateSearchTerm(searchText);
    }, 400);
  };

  return (
    <div className={`search${isSearchDisabled ? ' disabled' : ''}`}>
      {!isSearchDisabled ? <Magnifier className="magnifier" /> : <MagnifierDisabled className="magnifier" />}
      <input type="search" placeholder="Search movies..." className="search-input-field" onChange={processSearch} disabled={isSearchDisabled} />
    </div>
  );
}

Searchbar.propTypes = {
  dispatchUpdateSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
});

const mapDispatchToProps = {
  dispatchUpdateSearchTerm: updateSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
