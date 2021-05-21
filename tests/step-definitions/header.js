// @flow strict
import { Then } from '@cucumber/cucumber'
import { client } from 'nightwatch-api'

Then(/^I see the header contains "justin-shepard.net"$/, async () => {
  await client
    .expect.element('[data-id="header"]')
    .text.to.contain('justin-shepard.net')
    .before(500)
})
