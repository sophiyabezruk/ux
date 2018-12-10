import styled, { css } from 'react-emotion';

import removeProps from '../../../utils/removeProps';

const filteredTag = removeProps('section', ['padded', 'paint']);

export default styled(filteredTag)`
  ${p => (p.padded && css`
    padding: 1.25rem;
  `)}
  ${(p) => {
    switch (p.paint) {
      case 'light':
        return css` 
          background-color: ${p.theme.ui.colors.secondary}; 
          color: ${p.theme.ui.colors.default};`;
      case 'dark':
        return css` 
          background-color: ${p.theme.ui.colors.black}; 
          color: ${p.theme.ui.colors.white};`;
      case 'primary':
        return css` 
          background-color: ${p.theme.ui.colors.blue}; 
          color: ${p.theme.ui.colors.white};`;
      case 'info':
        return css` 
          background-color: ${p.theme.ui.colors.aqua}; 
          color: ${p.theme.ui.colors.white};`;
      case 'success':
        return css` 
          background-color: ${p.theme.ui.colors.green}; 
          color: ${p.theme.ui.colors.white};`;
      case 'warning':
        return css` 
          background-color: ${p.theme.ui.colors.yellow}; 
          color: ${p.theme.ui.colors.default};`;
      case 'danger':
        return css` 
          background-color: ${p.theme.ui.colors.red}; 
          color: ${p.theme.ui.colors.white};`;
      default:
        return '';
    }
  }}
`;
