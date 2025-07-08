import type { Lesson } from '../types'

const lesson1: Lesson = {
  slug: 'introduction',
  title: 'Introduction to Git',
  content: [
    { type: 'title', content: 'What is Git?' },
    { type: 'text', content: 'Git is a distributed version control system.' },
  ]
}

export default lesson1
