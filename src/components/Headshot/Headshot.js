import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from './juliastrnadjohnston.jpg';
import Box from 'grommet/components/Box';

export default class Headshot extends React.PureComponent {
  
  static propTypes = {
    color: PropTypes.bool,
    extraStyles: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    color: false,
    extraStyles: '',
    height: '230px',
    width: '230px',
  }
  
  render() {
    const {
      color,
      extraStyles,
      height,
      width,
    } = this.props;
    return (
      <Box pad='medium'>
        <img 
        alt="headshot"
        className={`Headshot ${extraStyles}`}
        height={height}
        src={image}
        width={width}
        />
        </Box>
    )
  }
}
