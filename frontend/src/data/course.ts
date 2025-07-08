import git_github from './courses/git-github/git-github';

import type { Course } from './courses/types'

const courseList = [git_github]

export const courses: Record<string, Course> = {}

for (const course of courseList) {
  courses[course.slug] = course
}
