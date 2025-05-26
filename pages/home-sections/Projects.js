import React from 'react'
import styled from 'styled-components'

import ProjectListing from '../../components/ProjectsListing'

const Center = styled.div`
  width: 85%;
  margin: auto auto 70px auto;
`

const Title = styled.div`
  font-size: 2.75rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding-top: 50px;
  margin-bottom: 20px;
`

const ProjectListingContainer = styled.div`
  margin-bottom: 50px;
`

const AboutProjects = styled.div`
  width: 800px;
  @media (max-width: 966px) {
    width: 100%;
  }
`

function Projects() {
  return (
    <Center id="projects">
      <Title >Featured Projects</Title>
      <AboutProjects>
      </AboutProjects>
      <ProjectListingContainer>
        <ProjectListing selected={true}/>
      </ProjectListingContainer>
    </Center>
  )
}

export default Projects