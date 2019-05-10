
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Interpolate from './Interpolate';

@inject('i18')
@observer
class T extends Component {  //eslint-disable-line
  render() {
    const { i18, name, ...props } = this.props;
    return <Interpolate i18n={i18} i18nKey={name} {...props} />;
  }
}

export default T;
