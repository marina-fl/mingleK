import React from 'react';
import PropTypes from 'prop-types';

function AddArticle({onClick}) {
    return (
        <div className="article-button">
            <button onClick={onClick}>
               New Article
            </button>
        </div>
        
    );
  }

AddArticle.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddArticle;

