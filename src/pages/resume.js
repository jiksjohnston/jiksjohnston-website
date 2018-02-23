import React from 'react';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Markdown from 'grommet/components/Markdown';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

export default class Index extends React.Component {
  render() {
    return (
      <Box>
        <Section 
          className='resume'
          pad='medium'>
        <Markdown content='
### EMPLOYMENT HISTORY
##### July 2013 – July 2017
#### UX Application Producer – Wholesale User Experience, Wells Fargo
- Lead UX Producer for "CEO Redesign" program. Oversaw UX production for the responsive redesign of new and existing wholesale treasury management applications. 
- Implemented improved design and content sprint processes during these engagements, resulting in timely handoffs to development and QA teams
- Scheduled and managed meetings, such as iteration planning, design reviews, sign off, retrospectives and stand ups; documented next steps and obtained necessary sign-offs.
- Advocated for role of UX team and educated partners and stakeholders about user-centered design methods and best practices
- Collaborated with Interaction Design, Content Strategy, Content Development, Visual Design, and Accessibility consultants in the development of high-fidelity user experience specifications
- Acted as primary UX liaison/contact for key stakeholders, such as program managers, product managers, project managers, engineers, QA leads and user experience researchers
- Developed production schedules and tracked status and activities using a variety of project management tools, such as Confluence, Jira or Sharepoint.
- Employed a range of project management methodologies – including agile and waterfall –depending on project type
- Developed working knowledge of Rich Internet Applications (RIA) framework and responsive design patterns, as well as web accessibility/ADA compliance standards
- Managed and trained producer contractors on our team    
' />
<Markdown content='
##### August 2012 - July 2013
#### Web Producer – Pacific Gas &amp; Electric Company (Contract)
- Acted as internal project manager for PG&amp;E’s Online Communications department
- Worked with internal business partners and IT to evaluate scope of requests
- Developed project plans, estimates and oversaw production, development and QA
- Projects included: 
    - Collaboration with Razorfish on UX redesign of Solar & Renewables sections. 
    - Time for Business mobile tour landing page &amp; registration forms, in collaboration with Momentum
    - Manual registration process for Home and Business Area Networking
    - Residential Rate Pilot landing pages and email campaign
    - PGE.com page removal audit &amp; CMS maintenance, with goal of eliminating unused and outdated pages, images and documents, in order to facilitate CMS migration
' />
<Markdown content='
##### September 2011 - August 2012
#### Senior Interactive Producer – Creative Lift
- Oversaw deployment schedule for Charter Communications’ e-commerce applications
- Led weekly prioritization meeting with stakeholders and IT
- Guided Associate Producer’s day-to-day project- and client-management on this account
- Led scoping initiative for application redesign
- Juggled 4-5 other interactive projects at any given time on other accounts, such as Facebook, Snapfish, Charter and Healthy Directions. Projects included microsites, landing pages, Flash banners, e-commerce shopping carts, radio spots and email campaigns.
- Supported Director of Interactive Production in improving revenue recognition on all projects by enforcing accurate scoping/estimation and budget tracking. 
- Trained internal teams on the role of project management in the agency
' />
<Markdown content='
##### August 2010 - August 2011
#### Interactive Producer – Creative Lift
- Acted as primary client-facing producer for the Bundle Builder, an e-commerce application for Charter Communications
- Managed deployments across all versions of the application, including UI changes, pricing structure changes, new features or rollouts of new versions of the application
- Earned promotion after improving scoping, production, scheduling, QA and deployment processes, which led to successful high profile pricing and offer releases for Charter
- Led weekly prioritization and status call with business owners, vendors and IT
- Wrote test cases and oversaw QA on all deployments. Managed testing with third-party QA vendor.
- Gathered requirements and worked with design and development teams to identify UI enhancements and functionality changes
- Introduced resource allocation process and supported on-going integration of this process within the company
- Supported Director of Interactive Production with development of process documentation and the adoption of new processes in the agency. This resulted in successfully integrating project managers into the internal process.
' />
<Markdown content='
##### October 2008-August 2010
#### Interactive Producer – Kane & Finkel Healthcare Communications
- Managed 5-8 projects interactive projects at a time, driving them from inception to launch in a fast-paced agency environment. Projects included websites, animations, interactive trade show panels and video games.
- Authored proposals and functional specification documents, detailing functionality, wireframes, and site architectures
- Created and tracked project plans
- Worked closely with in-house creative teams and out-of-house development partners
- Lead internal and client reviews of projects at alpha and beta stages
- Prepared submissions for legal/regulatory/compliance reviews
- Clients included Onyx Pharmaceuticals, Astellas US, Astellas EU, Dendreon and Abbott
' />
<Markdown content='
##### January 2008 - October 2008
#### Producer – Mediatrope Interactive Studio
- Authored project scope and production specification documents for new and existing websites. Functional specifications included page schematics, site architectures, user personas, user flows and competitive analyses.
- Managed freelance and in-house teams of designers, production artists, and developers
- Collaborated with supervisor and development team to conceive new features for websites and enhancements to the company’s proprietary content management system
- Created and tracked project schedules. Monitored budgets throughout project lifecycle.
- Acted as primary point of contact for a roster of 4-5 clients at a time. Directed weekly calls with clients and conducted in-person meetings. Prepared agendas, contact reports, estimates and change orders.
- Performed quality assurance testing
- Clients included the Museum of Fine Arts in Boston, Fine Arts Museum of San Francisco, Golden Gate National Parks Conservancy, Statens Museum for Kunst in Denmark, Shorenstein Hays Nederlander
' />
<Markdown content='
##### January 2007 - January 2008
#### Associate Producer – Mediatrope Interactive Studio
- Served as the primary technical support contact for ten maintenance clients
- Tracked bugs and support requests and conducted first-line troubleshooting of reported incidents
- Created, tracked and managed project schedules, budgets and deliverables
- Generated estimates and project scope descriptions
- Managed freelance and in-house teams of designers, production artists, and developers
- Contributed comparative analyses and user personas to functional specification documents
- Performed quality assurance testing
- Trained clients on how to use the company’s proprietary content management system
' />
<Markdown content='
### EDUCATION  
- Boston University, 1999-2000
- American University of Paris, France, 2001-2003, Bachelor of Arts in International Communications  
' />
<Markdown content='
### PROFESSIONAL DEVELOPMENT
- Product Management Course – General Assembly in 2016
- Scrum Master Training & Certification 2016
- Agile Management: Principles &amp; Practices at UC Berkeley Extension in 2012 
- Technical Communication I at UC Berkeley Extension in 2007
- UX Week 2011
' />
<Markdown content='
### OTHER SKILLS
- Jira & Confluence
- MS Visio
- Omnigraffle, Omniplan
- MS Project
- Basecamp
- Trello
' />
        </Section>
        <Section pad='medium'>
        <hr className='content-hr'/>
        <Paragraph>+1 (415) 420-5660</Paragraph>
        <Paragraph>juliastrnad [at] gmail [dot] com</Paragraph>
        </Section>
      </Box>
    )
  }
}


