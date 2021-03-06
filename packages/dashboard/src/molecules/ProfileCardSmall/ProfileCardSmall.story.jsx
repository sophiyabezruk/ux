import React from 'react';
import Story from '@lskjs/dev/Story';
import ProfileCardV1 from './ProfileCardSmall';



export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/ProfileCardSmall', module)
    .add('Default', () => (
      <Story>
        <ProfileCardV1 img="https://picsum.photos/200" name="Jason Bourne" info="Engineer" />
      </Story>
    ))
);
