import React from 'react';
import EmptyStateIllustration from '../../resources/illustrations/illustration-empty-state.png';

function InvalidState(props) {
  const { text, subtext } = props;
  return (
    <div className="invalid-state">
      <img src={EmptyStateIllustration} alt="Logo" />
      <div className="invalid-state-text">{text}</div>
      <div className="invalid-state-subtext">{subtext}</div>
    </div>
  );
}

export default InvalidState;