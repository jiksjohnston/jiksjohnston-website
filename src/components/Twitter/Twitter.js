import React, { Component } from 'react';
import PropTypes from 'prop-types';
import twitter from './twitter-logo-white.svg';


export default class Twitter extends React.PureComponent {
  
  static propTypes = {
    color: PropTypes.bool,
    extraStyles: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    color: false,
    extraStyles: 'social-icon',
    height: '36px',
    width: '36px',
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
      alt="twitter"
      className={`twitter ${extraStyles}`}
      height={height}
      src={twitter}
      width={width}
      />
    )
  }
}
