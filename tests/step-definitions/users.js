// @flow strict
import { Given } from '@cucumber/cucumber'
import { client } from 'nightwatch-api'

Given(/^I am a visitor to the website$/, async () => {
  return client
})
