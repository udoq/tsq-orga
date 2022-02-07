import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MemberCreateArgs>({
  member: {
    one: {
      data: {
        kd_nr: 2849238,
        first_name: 'String',
        last_name: 'String',
        email: 'String',
      },
    },
    two: {
      data: {
        kd_nr: 1675419,
        first_name: 'String',
        last_name: 'String',
        email: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
