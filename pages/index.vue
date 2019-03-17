<template>
  <section class="container">
    <Sites v-bind="sites" />
    <Scores v-bind="scores" />
  </section>
</template>

<script>
import Scores from '~/components/Scores.vue'
import Sites from '~/components/Sites.vue'

export default {
  components: {
    Scores,
    Sites
  },
  async asyncData({ error }) {
    const fs = require('fs')
    const util = require('util')
    const readFile = util.promisify(fs.readFile)

    try {
      const [scoresJSON, sitesJSON] = await Promise.all([
        readFile('data/scores.json'),
        readFile('data/sites.json')
      ])

      return {
        scores: parseRecords(scoresJSON),
        sites: parseRecords(sitesJSON)
      }
    } catch (e) {
      error({ statusCode: 404, message: e.message })
    }
  }
}

function parseRecords(maybeJSON) {
  try {
    return JSON.parse(maybeJSON)
  } catch(e) {
    console.log('could not parse:' + maybeJSON)
    throw new Error('unable to parse')
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 50vw;
  justify-content: center;
  text-align: center;
}

.title {
  margin-top: 30px;
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}

.filters {
  font-weight: bold;
  margin: 15px;
}

a {
  text-decoration: underline;
  padding: 0 5px;
}

table {
  margin: 15px auto;
}

td, th {
  padding: 5px;
}

details {
  margin-top: 15px;
}

pre {
  text-align: left;
  border: 1px solid black;
}
</style>
