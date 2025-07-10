export type CourseElement =
  | { type: 'title'; content: string }
  | { type: 'subtitle'; content: string }
  | { type: 'text'; content: string }
  | { type: 'list'; content: string }
  | { type: 'important'; content: string }
  | { type: 'subtext', content: string}
  | { type: 'code_example', content: string}
  | { type: 'image', content: { src: string, alt?: string, caption?: string} }

export type Lesson = {
  slug: string
  title: string
  time: string
  content: CourseElement[]
}

export type Course = {
  slug: string
  name: string
  time: string
  lessons: Lesson[]
}