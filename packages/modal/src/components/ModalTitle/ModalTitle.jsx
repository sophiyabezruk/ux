/* eslint import/no-extraneous-dependencies: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import If from 'react-if';
import ArrowLeft from 'react-icons2/mdi/arrow-left';
import Button from '@lskjs/button';
import { Title, buttonStyle } from './ModalTitle.styles';

class ModalTitle extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    onBack: PropTypes.func,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    whiteTheme: PropTypes.bool,
  }
  static defaultProps = {
    align: 'left',
    onBack: null,
    whiteTheme: false,
  }
  render() {
    const { children, align, onBack, whiteTheme } = this.props;
    return (
      <Title align={align} className="modal-title" whiteTheme={!!whiteTheme}>
        <If condition={!!onBack}>
          <Button
            className={buttonStyle}
            paint="primary"
            size="small"
            icon={<ArrowLeft />}
            onClick={onBack}
          />
        </If>
        {children}
      </Title>
    );
  }
}

export default ModalTitle;
