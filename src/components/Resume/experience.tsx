import * as React from 'react'

import type {
  Company as ICompany,
  Consulting,
  Contract as IContract,
  FullTime,
  Role as IRole,
} from '../../data/resume'
import { hash, toKebabCase } from '../../helpers/string.helpers'
import { YearData } from './resume.helpers'

const yearRangeString = (data: YearData) => {
  let yearRange = String(data.beginYear)
  if (data.endYear && data.endYear !== data.beginYear) {
    yearRange += ` - ${data.endYear}`
  } else if (!data.endYear) {
    yearRange += ` - Present`
  }

  return yearRange
}

const Role = ({ role }: { role: IRole }) => {
  return (
    <div>
      <h4>{role.roleName} ({yearRangeString(role)})</h4>
      <ul>
        {role.roleSummary.map(e => <li key={hash(e)}>{e}</li>)}
      </ul>
    </div>
  )
}

const FullTimeCompany = ({ company }: { company: FullTime }) => {
  const companyTestId = `company-${toKebabCase(company.companyName)}`
  return (
    <div data-testid={companyTestId}>
      <h3>{company.companyName}, {company.city}, {company.state} ({yearRangeString(company)})</h3>
      <p data-testid={`${companyTestId}-summary`}>{company.companySummary}</p>
      <div data-testid={`${companyTestId}-roles`}>
        {company.roles.map((e, i) => <Role key={e.roleName + i} role={e} />)}
      </div>
    </div>
  )
}

const Contract = ({ contract }: { contract: IContract }) => {
  return contract.roles.map(role => {
    return (
      <div key={hash(contract.companyName + role.roleName)}>
        <h4>{`${contract.companyName}, ${contract.city}, ${contract.state} \u2013 ${role.roleName} (${yearRangeString(role)})`}</h4>
        <ul>
          {role.roleSummary.map(e => <li key={hash(e)}>{e}</li>)}
        </ul>
      </div>
    )
  })
}

const ConsultingCompany = ({ company }: { company: Consulting }) => {
  const companyTestId = `company-${toKebabCase(company.companyName)}`
  return (
    <div data-testid={companyTestId}>
      <h3>{company.companyName}, {company.city}, {company.state} ({yearRangeString(company)})</h3>
      <p data-testid={`${companyTestId}-summary`}>{company.companySummary}</p>
      <div data-testid={`${companyTestId}-contracts`}>
        {company.contracts.map(e => <Contract key={e.companyName} contract={e} />)}
      </div>
    </div>
  )
}

const Company = ({ company }: { company: ICompany }) => {
  switch (company.type) {
    case 'full-time':
      return <FullTimeCompany company={company} />
    case 'consulting':
      return <ConsultingCompany company={company} />
  }
}

interface Props {
  experience: ICompany[]
}

const Experience = ({ experience }: Props) => {
  return (
    <div data-testid='experience'>
      <h2>Experience</h2>
      {experience.map(e => <Company key={e.companyName} company={e} />)}
    </div>
  )
}

export default Experience
