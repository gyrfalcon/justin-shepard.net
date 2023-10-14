import { JSONSchemaType } from 'ajv'

interface BaseCompany {
  companyName: string
  companySummary: string
  city: string
  state: string
  beginYear: number
  endYear?: number
}

interface Role {
  roleName: string
  beginYear: number
  endYear?: number
  roleSummary: string[]
}

const roleSchema: JSONSchemaType<Role> = {
  type: 'object',
  properties: {
    roleName: { type: 'string' },
    beginYear: { type: 'integer' },
    endYear: { type: 'integer', nullable: true },
    roleSummary: { type: 'array', items: { type: 'string' } },
  },
  required: ['beginYear', 'roleSummary', 'roleName'],
  additionalProperties: false,
}

export interface FullTime extends BaseCompany {
  type: 'full-time'
  roles: Role[]
}

const fullTimeSchema: JSONSchemaType<FullTime> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'full-time' },
    companyName: { type: 'string' },
    companySummary: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    beginYear: { type: 'integer' },
    endYear: { type: 'integer', nullable: true },
    roles: { type: 'array', items: roleSchema },
  },
  required: ['beginYear', 'city', 'companyName', 'companySummary', 'roles', 'state', 'type'],
  additionalProperties: false,
}

interface Contract {
  companyName: string
  city: string
  state: string
  roles: Role[]
}


const contractSchmea: JSONSchemaType<Contract> = {
  type: 'object',
  properties: {
    companyName: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    roles: { type: 'array', items: roleSchema },
  },
  required: ['city', 'companyName', 'roles', 'state'],
  additionalProperties: false,
}

export interface Consulting extends BaseCompany {
  type: 'consulting'
  contracts: Contract[]
}


const consultingSchema: JSONSchemaType<Consulting> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: 'consulting' },
    companyName: { type: 'string' },
    companySummary: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    beginYear: { type: 'integer' },
    endYear: { type: 'integer', nullable: true },
    contracts: { type: 'array', items: contractSchmea },
  },
  required: ['beginYear', 'city', 'companyName', 'companySummary', 'contracts', 'state', 'type'],
  additionalProperties: false,
}

type Company = FullTime | Consulting

export interface Resume {
  name: string
  email: string
  professionalSummary: string[]
  experience: Company[]
  buzzwords: { [category: string]: string[] }
}

export const schema: JSONSchemaType<Resume> = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    professionalSummary: { type: 'array', items: { type: 'string' } },
    experience: {
      type: 'array',
      items: {
        type: 'object',
        discriminator: { propertyName: 'type' },
        required: ['type'],
        oneOf: [fullTimeSchema, consultingSchema],
      },
    },
    buzzwords: { type: 'object', required: [], additionalProperties: { type: 'array', items: { type: 'string' } } },
  },
  required: ['buzzwords', 'email', 'experience', 'name', 'professionalSummary'],
  additionalProperties: false,
}