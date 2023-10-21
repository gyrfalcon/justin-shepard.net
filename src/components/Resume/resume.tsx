import * as React from 'react'

import { Resume } from '../../data/resume'
import { getResumeData } from './resume.hooks'
import Buzzwords from './buzzwords'

const Resume = () => {
  const [ resume, setResume ] = React.useState<Resume | undefined>()

  getResumeData(setResume)

  if (resume) {
    console.log(resume)
    return (
      <div data-testid='resume'>
        <h1 data-testid='name'>{resume.name}</h1>
        <a data-testid='email' href={`mailto:${resume.email}`}>{resume.email}</a>
        <Buzzwords buzzwords={resume.buzzwords} />
      </div>
    )
  }
  else {
    return <p>Loading...</p>
  }
}

export default Resume
