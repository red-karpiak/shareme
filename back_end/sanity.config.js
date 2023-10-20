import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import user from './schemas/user'

const schemaTypes = [
  user
]
export default defineConfig({
  name: 'default',
  title: 'Share Me',

  projectId: 'fsp1ccb0',
  dataset: 'development',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
