<template>
  <div>
    <h1 class="title">Student Averages</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Grade</th>
          <th>Teachers</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in sorted" :key="record.student">
          <td>{{ record.student }}</td>
          <td>{{ record.average }}</td>
          <td>{{ record.grade }}</td>
          <td>{{ record.teachers }}</td>
        </tr>
      </tbody>
    </table>
    <details>
      <summary>Get JSON</summary>
      <pre>{{ json }}</pre>
    </details>
  </div>
</template>

<script>
import { average } from '~/utils/index'

const grades = {
  a: Symbol('A'),
  b: Symbol('B'),
  c: Symbol('C'),
  d: Symbol('D'),
  f: Symbol('F')
}

const recordMap = new Map()

function getGrade(average) {
  if (average >= 95) {
    return grades.a.description
  }
  if (average >= 85) {
    return grades.b.description
  }
  return grades.c.description
}

function transformRecord(record) {
  if (recordMap.has(record.id)) {
    return recordMap.get(record.id)
  }

  const avg = average(record.scores.flat(2))
  const grade = getGrade(avg)
  const result = {
    student: record.student.trim(),
    average: avg,
    teachers: record.teachers.split(',').map(teacher => teacher.trimEnd()).join(','),
    grade
  }

  recordMap.set(record.id, result)

  return result
}

export default {
  props: {
    records: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    recordsMap() {
      this.records.map(record => transformRecord(record))
      return recordMap;
    },
    sorted() {
      const mapped = this.records.map(record => transformRecord(record))
      return mapped.sort((a, b) => a.average - b.average)
    },
    json() {
      if (!Object.fromEntries) {
        return 'loading...'
      }
      return JSON.stringify(Object.fromEntries(this.recordsMap), null, 2)
    }
  },
  watch: {
    records() {
      recordMap.clear()
    }
  }
}
</script>
