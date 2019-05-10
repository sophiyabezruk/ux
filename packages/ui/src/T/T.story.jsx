import React from 'react';
import Story from '@lskjs/dev/Story';
import T from './T';

class DynamicComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const { value } = this.state;
      this.setState({
        value: value + 1,
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { value } = this.state;
    return (<div>Dynamic: {value}</div>)
  }
}

export default ({ storiesOf }) => (
  storiesOf('T', module)
    .add('empty', () => (
      <Story>
        <T name="test.key" />
      </Story>
    ))
    .add('example key', () => (
      <Story>
        <T name="key" />
      </Story>
    ))
    .add('interpolate string', () => (
      <Story>
        <T name="test" anything="value" />
      </Story>
    ))
    .add('interpolate component', () => (
      <Story>
        <T name="test" anything={<div>Test Component</div>} />
      </Story>
    ))
    .add('interpolate dynamic component', () => (
      <Story>
        <T name="test" anything={<DynamicComponent />} />
      </Story>
    ))
);

