import React from 'react'
import PropTypes from 'prop-types'
import App from 'grommet/components/App'
import Header from 'grommet/components/Header';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';


import Nameplate from '../components/Nameplate'
import Topbar from '../components/Topbar'
import Headshot from '../components/Headshot'
import Linkedin from '../components/Linkedin'
import Twitter from '../components/Twitter'

import '../scss/main.scss'

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <App centered={true}>
      <Topbar/>
      <Split
        flex='right'
        fixed={false}
        separator={false}
        showOnResponsive='both'>
        <Box colorIndex='brand'
          justify='end'
          align='center'
          pad='medium'>
          <Headshot />
          <Box direction='row' 
          responsive={false} >
            <Anchor 
              icon={<Linkedin />}
              href='https://www.linkedin.com/in/juliastrnadjohnston/' 
              target='_blank' 
            />
            <Anchor 
              icon={<Twitter />}
              href='https://twitter.com/jiks_johnston' 
              target='_blank'
            />
            </Box>
        </Box>
        <Box colorIndex='brand'
          justify='center'
          alignSelf='stretch'
          pad='medium'>
          {this.props.children()}
        </Box>
      </Split>    
      </App>
    )
  }
}
