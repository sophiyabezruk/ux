import React from 'react';
import Story from '@lskjs/dev/Story';
import Image from './Image';

export default ({ storiesOf }) =>
  storiesOf('image/Image', module)
    .add('default', () => (
      <Story>
        <Image src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e92/s375" />
      </Story>
    ))
    .add('non-valid link', () => (
      <Story>
        <Image src="https://avatars.mds.yandex.net/get-pdb/750514/5798b2df-9998-4381-b8be-57aaf7b65e9" />
      </Story>
    ))
    .add('without link', () => (
      <Story>
        <Image />
      </Story>
    ))
    .add('src null', () => (
      <Story>
        <Image src={null} />
      </Story>
    ));
