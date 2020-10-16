import React from 'react';
import PropTypes from 'prop-types';
import EmptyStateIllustration from '../../resources/illustrations/illustration-empty-state.png';

function InvalidState({ text, subtext }) {
  return (
    <div className="invalid-state">
      <img src={EmptyStateIllustration} alt="Logo" />
      <div className="invalid-state-text">{text}</div>
      <div className="invalid-state-subtext">{subtext}</div>
    </div>
  );
}

InvalidState.propTypes = {
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
};

export default InvalidState;
