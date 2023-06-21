// components/MarkdownRenderer.js

import React from 'react';
import { marked } from 'marked';

const MarkdownRenderer = ({ markdown, error }) => {
  const postHtml = marked(markdown);

  return error ? (
    <div className='error'>Sorry, the page you were looking for could not be found.</div>
  ) : (
    <div dangerouslySetInnerHTML={{ __html: postHtml }}  className='mdhtml'/>
  );
};

export default MarkdownRenderer;
