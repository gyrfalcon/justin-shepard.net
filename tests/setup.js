// @flow strict
import {
  After,
  AfterAll,
  Before,
  BeforeAll,
} from '@cucumber/cucumber'
import {
  closeSession,
  createSession,
  startWebDriver,
  stopWebDriver,
} from 'nightwatch-api'
import express from 'express'

let staticServer: http$Server

const startStaticServer = (): Promise<http$Server> => {
  const staticApp = express()
  staticApp.use(express.static('dist'))

  return new Promise((resolve, reject) => {
    const server: ?http$Server = staticApp.listen(8181, (): mixed => {
      if (server) {
        resolve(server)
      } else {
        reject(new Error('server undefined'))
      }
    })
  })
}

const stopStaticServer = (server: http$Server): Promise<void> => {
  return new Promise((resolve, reject) => {
    server.close((error: ?Error) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

BeforeAll(async () => {
  await startWebDriver('default')
  staticServer = await startStaticServer()
})

Before(async () => {
  await createSession('default')
})

After(async () => {
  await closeSession()
})

AfterAll(async () => {
  await stopStaticServer(staticServer)
  await stopWebDriver()
})
