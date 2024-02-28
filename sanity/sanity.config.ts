import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {googleMapsInput} from '@sanity/google-maps-input'
import {defineConfig} from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'Nutti Sanity Website',

  projectId: '131yx63g',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    googleMapsInput({
      apiKey: process.env.SANITY_STUDIO_GOOGLE_MAPS_KEY || '',
      defaultZoom: 14,
      defaultLocation: {
        lat: 4.7061163,
        lng: -74.0729736,
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
