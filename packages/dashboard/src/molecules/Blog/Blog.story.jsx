import React from 'react';
import Blog from './Blog';
import Story from '@lskjs/dev/Story';

const articles = [
  {
    title: 'Dolor sit amet, consectetur adipisicing elit.',
    avatar: 'assets/images-demo/avatars/1.jpg',
    author: 'Jason Bourne',
    category: 'Web Design',
    date: '10 June',
    description: 'Consequuntur hic eum ab consequatur, veniam laudantium placeat pariatur numquam quo voluptatem velit, labore voluptas tempore temporibus vitae tenetur porro eligendi exercitationem fugiat ipsum in ullam. Necessitatibus laboriosam enim ea eos, eveniet corporis impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/Blog', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <Story>
          <Blog {...articles[0]} />
        </Story>
      </div>
    ))
);
