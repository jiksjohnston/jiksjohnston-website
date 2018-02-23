import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './juliastrnadjohnston-nameplate.svg';
import logoColor from './juliastrnadjohnston-nameplate.svg';

export default class Nameplate extends React.PureComponent {
  
  static propTypes = {
    color: PropTypes.bool,
    extraStyles: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    color: false,
    extraStyles: '',
    height: '16px',
    width: '236px',
  }
  
  render() {
    const {
      color,
      extraStyles,
      height,
      width,
    } = this.props;
    return (
      <img 
      alt="logo"
      className={`logo ${extraStyles}`}
      height={height}
      src={color ? logoColor : logo}
      width={width}
      />
    )
  }
}
