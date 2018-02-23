import React, { Component } from 'react';
import PropTypes from 'prop-types';
import linkedin from './linkedin-logo-white.svg';


export default class Linkedin extends React.PureComponent {
  
  static propTypes = {
    color: PropTypes.bool,
    extraStyles: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    color: false,
    extraStyles: 'icon',
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
      alt="linkedin"
      className={`linkedin-icon ${extraStyles}`}
      height={height}
      src={linkedin}
      width={width}
      />
    )
  }
}
