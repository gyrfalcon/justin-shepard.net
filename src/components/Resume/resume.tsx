import * as React from 'react'

import Markdown from '../Markdown'
import Spinner from '../Spinner'
import Buzzwords from './buzzwords'
import Experience from './experience'

import { type Resume as ResumeData } from '../../data/resume'
import { getResumeData } from './resume.hooks'
import * as styles from './resume.module.css'

const Resume = () => {
  const [resume, setResume] = React.useState<ResumeData | undefined>()

  getResumeData(setResume)

  if (resume) {
    return (
      <div className={styles.resume} data-testid='resume'>
        <h1 data-testid='name'>{resume.name}</h1>
        <a data-testid='email' href={`mailto:${resume.email}`}>
          {resume.email}
        </a>
        <ul data-testid='professional-summary'>
          {resume.professionalSummary.map((e, i) => (
            <li key={i}>
              <Markdown>{e}</Markdown>
            </li>
          ))}
        </ul>
        <Experience experience={resume.experience} />
        <Buzzwords buzzwords={resume.buzzwords} />
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default Resume
