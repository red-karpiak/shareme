import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import user from './schemas/user'
import comment from './schemas/comment'
import pin from './schemas/pin'
import postedBy from './schemas/postedBy'
import save from './schemas/save'
const schemaTypes = [
  user, comment, pin, postedBy, save
]
export default defineConfig({
  name: 'default',
  title: 'Share Me',

  projectId: 'fsp1ccb0',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
