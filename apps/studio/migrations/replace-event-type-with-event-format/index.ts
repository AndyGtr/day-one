// Import helpers from Sanity's migration API:
// - defineMigration: declares the migration so the CLI can run and track it
// - at: points to a specific path/field in the document
// - setIfMissing: sets a value only if that field is currently undefined
// - unset: removes a field from the document
import {defineMigration, at, setIfMissing, unset} from 'sanity/migrate'

// Name of the old field we are deprecating on event documents
const from = 'eventType'
// Name of the new field that should receive the data
const to = 'format'

// Define the content migration that will be picked up by `npx sanity migration ...`
export default defineMigration({
  // Human‑readable label that will show up in the Sanity migration list
  title: 'Replace event type with event format',

  // Only run this migration for documents of type "event"
  // documentTypes: ['event'],

  filter: '_type == "event" && defined(eventType) && !defined(format)',

  migrate: {
    // Called once for each matching document in the dataset
    document(doc) {
      // Return an array of patches that describe how to transform this document
      return [
        // 1. If "format" is missing, copy over the value from "eventType"
        at(to, setIfMissing(doc[from])),
        // 2. Remove the old "eventType" field from the document
        at(from, unset()),
      ]
    },
  },
})