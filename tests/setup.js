// @flow strict
import {
  type Server,
} from 'http'
import {
  After,
  AfterAll,
  Before,
  BeforeAll,
} from 'cucumber'
import {
  closeSession,
  createSession,
  startWebDriver,
  stopWebDriver,
} from 'nightwatch-api'
import express from 'express'

let staticServer: Server

const startStaticServer = (): Promise<Server> => {
  const staticApp = express()
  staticApp.use(express.static('dist'))

  return new Promise((resolve, reject) => {
    const server: ?Server = staticApp.listen(8181, (): mixed => {
      if (server) {
        resolve(server)
      } else {
        reject(new Error('server undefined'))
      }
    })
  })
}

const stopStaticServer = (server: Server): Promise<void> => {
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
  staticServer = await startStaticServer()
  await startWebDriver('default')
})

Before(async () => {
  await createSession('default')
})

After(async () => {
  await closeSession()
})

AfterAll(async () => {
  await stopWebDriver()
  await stopStaticServer(staticServer)
})
