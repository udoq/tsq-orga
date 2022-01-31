import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const courses = () => {
  return db.course.findMany()
}

export const course = ({ id }: Prisma.CourseWhereUniqueInput) => {
  return db.course.findUnique({
    where: { id },
  })
}

interface CreateCourseArgs {
  input: Prisma.CourseCreateInput
}

export const createCourse = ({ input }: CreateCourseArgs) => {
  return db.course.create({
    data: input,
  })
}

interface UpdateCourseArgs extends Prisma.CourseWhereUniqueInput {
  input: Prisma.CourseUpdateInput
}

export const updateCourse = ({ id, input }: UpdateCourseArgs) => {
  return db.course.update({
    data: input,
    where: { id },
  })
}

export const deleteCourse = ({ id }: Prisma.CourseWhereUniqueInput) => {
  return db.course.delete({
    where: { id },
  })
}

export const Course = {
  members: (_obj, { root }: ResolverArgs<ReturnType<typeof course>>) =>
    db.course.findUnique({ where: { id: root.id } }).members(),
}
