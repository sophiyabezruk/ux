import React from 'react';
import CalloutRight from './CalloutRight';
import Story from '@lskjs/dev/Story';

const articles = [
  {
    title: 'Architecto odit fuga facere',
    buttonText: 'Try it Now',
    content: 'Culpa eveniet labore cupiditate at maiores dignissimos, nesciunt quam porro accusantium velit quas? Nam nobis, deleniti inventore consequuntur quos vero voluptatum nostrum error porro mollitia, accusantium distinctio nemo expedita ipsum quisquam laboriosam',
  },
];
export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/CalloutRight', module)
    .add('Default', () => (
      <Story>
        <CalloutRight {...articles[0]} />
      </Story>
    ))
);
