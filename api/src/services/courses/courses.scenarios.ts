import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: {
      data: {
        category: 'String',
        course_type: 'String',
        day: 'String',
        time: 'String',
      },
    },
    two: {
      data: {
        category: 'String',
        course_type: 'String',
        day: 'String',
        time: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
