/* eslint-disable react/jsx-one-expression-per-line */
import { injectGlobal } from 'emotion';
import React from 'react';
import Story from '@lskjs/dev/Story/Story';
import resetcss from '@lskjs/ui/Typo/resetcss';
import ArticleMarkdown from '../ArticleMarkdown';
import post1 from './post1.md';

export default ({ storiesOf }) => {
  storiesOf('ui/ArticleMarkdown', module)
    .add('Hello World', () => {
      injectGlobal(resetcss());
      return (
        <Story>
          <ArticleMarkdown content="#Hello World" />
        </Story>
      );
    })
    .add('Medium 1', () => {
      injectGlobal(resetcss());
      return (
        <Story>
          <ArticleMarkdown content={post1} />
        </Story>
      );
    });
};