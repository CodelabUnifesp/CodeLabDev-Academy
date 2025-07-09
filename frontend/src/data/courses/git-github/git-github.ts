import type { Course } from '../types'
import lesson1 from './lesson1'
import lesson2 from './lesson2'

const gitCourse: Course = {
  slug: 'git_github',
  name: 'Git e Github',
  time: '1 hora',
  lessons: [lesson1, lesson2]
}

export default gitCourse
