import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';

import twitter from './twitter-logo-white.svg';
import linkedin from './linkedin-logo-white.svg';

export default class Social extends React.Component {
  
  static propTypes = {
    color: PropTypes.bool,
    extraStyles: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  static defaultProps = {
    color: false,
    extraStyles: 'socialIcon',
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
      <Box direction='row'>
        <Anchor href="https://twitter.com/juliastrnad"
          target='_blank'
          
          <img 
            src={twitter}
            alt="twitter"
            className={`twitter-icon ${extraStyles}`}
            height={height}
            width={width}
          />
        
        />
        <Anchor href="https://www.linkedin.com/in/juliastrnadjohnston/"
          target='_blank'
      
            <img 
              src={linkedin}
              alt="linkedin"
              className={`linkedinx-icon ${extraStyles}`}
              height={height}
              width={width}
            />

        />
      </Box>
    )
  }
}