export type CourseElement =
  | { type: 'title'; content: string }
  | { type: 'text'; content: string }

export type Lesson = {
  slug: string
  title: string
  content: CourseElement[]
}

export type Course = {
  slug: string
  name: string
  lessons: Lesson[]
}