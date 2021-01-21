import React from 'react';
import PropTypes from 'prop-types';

// function ArticleText() {
//   return (
//     <div>
//     <p>
//     someText
//     </p> 
//     </div>
//   );
// }
function ArticleText({someText}) {
  return (
      <div className="article-text">
          <p putText={someText}>
            some text
          </p>
      </div>
      
  );
}

ArticleText.propTypes = {
  someText: PropTypes.string
};

export default ArticleText;