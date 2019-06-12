import React, { PureComponent } from 'react';
import omit from 'lodash/omit';
import theme from '@lskjs/theme';
import { css } from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';
import { autobind } from '@lskjs/autobind';
import { PropTypes } from 'prop-types';
import ButtonGroup from '@lskjs/button/ButtonGroup';
import Button from '@lskjs/button';
import Bool from '../Checkbox/Bool';

class RadioButtonGroup extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      title: PropTypes.string,
    })),
    value: PropTypes.string,
    paint: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    options: [],
    value: null,
    paint: 'primary',
    onChange: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      show: props.value,
    };
  }

  onChange(value) {
    const { onChange } = this.props;
    this.setState({ show: value });
    if (onChange) {
      onChange(value);
    }
  }

  render() {
    const {
      options,
      value,
      paint,
      ...props
    } = this.props;
    const radioButtonGroupStyle = css`
      &:focus {
        background-color: ${getTheme(theme, `colors.${paint}`)};
      }
    `;
    return (
      <ButtonGroup
        panel
        {...omit(props, ['onChange'])}
      >
        {options.map((item, index) => (
          <Button
            key={index} // eslint-disable-line react/no-array-index-key
            size="small"
            paint={this.state.show === item.value ? paint : 'default'}
            style={{
              boxShadow: this.state.show === item.value
                ? `0 0 0 1px ${getTheme(theme, `colors.${paint}`)}`
                : '0 0 0 1px #eee',
            }}
            className={radioButtonGroupStyle}
            onClick={() => {
              this.onChange(item.value);
            }}
          >
            {item.title}
          </Button>
        ))}
      </ButtonGroup>
    );
  }
}

export default props => <Bool {...props} componentClass={RadioButtonGroup} />;
