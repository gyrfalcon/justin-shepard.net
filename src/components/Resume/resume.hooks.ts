import { useEffect } from 'react'
import { type Resume, schema } from '../../data/resume'
import axios, { type AxiosResponse } from 'axios'
import Ajv from 'ajv'

const validator = new Ajv({ discriminator: true }).compile(schema)

export const getResumeData = (setResume: (resume: Resume) => void) => {
  useEffect(() => {
    axios.get('/data/resume.json')
      .then((response: AxiosResponse<object>) => {
        if (response.status === 200) {
          const data = response.data
          if (validator(data)) {
            setResume(data)
          } else {
            throw new Error(`Invalid JSON data receieved ${JSON.stringify(validator.errors)}`)
          }
        } else {
          throw new Error(`Error while retrieving resume data: ${JSON.stringify(response)}`)
        }
      })
  }, ['once'])
}