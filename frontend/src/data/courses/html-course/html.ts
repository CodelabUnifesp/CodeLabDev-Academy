import type { Course } from '../types'
import lesson1 from './lesson1'
import lesson2 from './lesson2'
import lesson3 from './lesson3'
import lesson4 from './lesson4'


const htmlCourse: Course = {
  slug: 'html',
  name: 'HTML',
  time: '1 hora',
  lessons: [lesson1, lesson2, lesson3, lesson4]
}

export default htmlCourse
