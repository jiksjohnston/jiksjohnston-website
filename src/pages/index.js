import React from 'react'
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Markdown from 'grommet/components/Markdown';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

export default class Index extends React.Component {
  render() {
    return (
      <Box>
      <Section className='intro' 
      pad='medium'>

      <Paragraph>I’m a Producer with ten years’ experience helping multi-disciplinary teams deliver successful design and development projects.</Paragraph> 

      <Paragraph>I have worked on both the agency and enterprise side and am comfortable with a range of subject matter, including financial services, telecommunications, pharmaceuticals, and the non-profit museum world. </Paragraph>

      <Paragraph>In my most recent role as lead UX Producer for a large financial services organization, I managed UX production for the redesign of several large-scale treasury management applications. </Paragraph>

      <Paragraph>Some of my specific interests and strengths include:</Paragraph>

      {/* <List>
        <ListItem separator={false}>
        - Collaborating with teams of designers, writers, developers, etc. </ListItem>
        <ListItem separator={false}>- Managing cross-functional teams and building partnerships with stakeholders</ListItem>
        <ListItem separator={false}>- Process development & process improvement</ListItem>
        <ListItem separator={false}>- User-centered design practices</ListItem>
        <ListItem separator={false}>- Agile</ListItem>
      </List> */}

      <Markdown content='
- Collaborating with teams of designers, writers, developers, etc.
- Managing cross-functional teams and building partnerships with stakeholders
- Process development & process improvement
- User-centered design practices
- Agile
      ' />


      <Paragraph>If you think I’d be a good fit for your team, please get in touch – I’d love to hear from you.</Paragraph>

      <Paragraph>I can be reached at +1 (415) 420-5660 or juliastrnad [at] gmail [dot] com</Paragraph>

      </Section>
      </Box>
    )
  }
}
