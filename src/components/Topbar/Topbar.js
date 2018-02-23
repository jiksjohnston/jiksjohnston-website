import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Link from 'gatsby-link';

import Nameplate from '../Nameplate'

export default class Topbar extends React.PureComponent {
  
  render() {
    return (
      <Header float={false}
      pad='medium'
      responsive={true}
        style={{ borderBottom: '1px solid white'}}>
        <Box colorIndex='brand'
          justify='end'
          align='center'
          pad='medium'>
          <Anchor
          className='nameplate'
          icon={<Nameplate/>}
          href='/' />
        </Box>
        <Box 
          flex={true}
          direction='row'
          align='end'
          justify='end'>
          <Box 
            colorIndex='brand'
            // className={`nav`} //TODO() better BEM classes for these things
            flex='shrink'
            direction='row'
            pad='medium'
            responsive={false}
            justify='center'
            >
            <Link 
              //exact 
              to='/' 
              className='grommetux-anchor'
              //activeClassName='grommetux-anchor--active'
            >Intro</Link>
            <Link 
              //exact 
              to='/resume/' 
              className='grommetux-anchor'
              //activeClassName='grommetux-anchor--active'
            >Resume</Link>
            {/* <Anchor label='Intro'
              // href='#'
              primary={false}
              path='/' />
            <Anchor label='Resume'
              // href='#'
              primary={false}
              path='/resume' /> */}
            {/* <Anchor label='Contact'
              href='#'
              primary={false}
              path='/contact' /> */}
          </Box>
        </Box>
      </Header>
    )
  }
}
