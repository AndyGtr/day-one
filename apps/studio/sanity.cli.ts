import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3tmi4ntn',
    dataset: 'production'
  },
  deployment: {
    /**
     * Keep local and runtime Studio versions aligned to avoid blank-screen
     * bundle errors (e.g. vision plugin importing APIs missing in older sanity).
     */
    autoUpdates: false,
  }
})
