import type { AddressInfo } from 'net'
import { build, startup } from 'vite-plugin-electron'
import path from 'path'

const entry = path.join(__dirname, 'electron/main.ts')

export default defineNuxtConfig({
  hooks: {
    listen(server) {
      const addressInfo = server.address() as AddressInfo
      Object.assign(process.env, {
        // This is required, and it is used in Electron-Main.
        VITE_DEV_SERVER_URL: `http://localhost:${addressInfo.port}`,
      })

      build({
        entry,
        vite: {
          build: { minify: false, watch: {} },
          plugins: [{
            name: 'nuxt-electron-start',
            writeBundle() { startup() },
          }],
        },
      })
    },
    'build:done'() {
      if (process.env.NODE_ENV === 'production') {
        build({ entry })
      }
    }
  }
})
