// @flow strict
import { When } from 'cucumber'
import { client } from 'nightwatch-api'

When(/^I open the justin-shepard.net homepage$/, async () => {
  await client.url('http://localhost:8181/')
})
