import git_github from './courses/git-github/git-github';
import htmlCourse from './courses/html-course/html';

import type { Course } from './courses/types'

const courseList = [git_github, htmlCourse]

export const courses: Record<string, Course> = {}

for (const course of courseList) {
  courses[course.slug] = course
}
