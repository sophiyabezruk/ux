/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import createContextToProps from '@lskjs/utils/createContextToProps';

const Context = React.createContext('Modal2');

export const { Provider, Consumer } = Context;
export const contextToProps = createContextToProps(Context);
