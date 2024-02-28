import {createClient} from '@sanity/client'
import fs from 'fs/promises'
import {v4 as uuidv4} from 'uuid'
import PQueue from 'p-queue'
import * as dotenv from 'dotenv'
dotenv.config({path: `.env.local`, override: true})

const client = createClient({
  projectId: '131yx63g',
  dataset: 'production',
  token: process.env.SANITY_TOKEN || '',
  useCdn: false,
})

// client.create()

const importer = async () => {
  const file = await fs.readFile('./data/stores.json', 'utf-8')
  const data = JSON.parse(file)
  const rawEntries = Object.values(data)
  const entries = rawEntries.map((entry) => {
    const {
      post_title,
      wpsl_address,
      wpsl_city,
      wpsl_phone,
      wpsl_url,
      wpsl_lat,
      wpsl_lng,
      wpsl_country,
      wpsl_country_iso,
      post_name,
      post_status,
    } = entry
    const id = uuidv4()
    return {
      _id: post_status === 'draft' ? `drafts.${id}` : id,
      _type: 'store',
      title: post_title,
      slug: {
        _type: 'slug',
        current: post_name,
      },
      address: wpsl_address,
      city: wpsl_city,
      country: wpsl_country,
      country_iso: wpsl_country_iso,
      phone: wpsl_phone,
      url: wpsl_url,
      location: {
        _type: 'geopoint',
        lat: +wpsl_lat,
        lng: +wpsl_lng,
      },
    }
  })
  console.log(entries)
  const queue = new PQueue({
    concurrency: 1,
    interval: 1000 / 25,
  })
  queue
    .addAll(
      entries.map(
        (entry) => () =>
          client.create(entry).then((result) => {
            console.log('created', result)
          }),
      ),
    )
    .then(() => {
      console.log('done')
    })
}

importer()
