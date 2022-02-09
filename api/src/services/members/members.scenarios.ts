import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MemberCreateArgs>({
  member: {
    one: {
      data: { first_name: 'String', last_name: 'String', email: 'String' },
    },
    two: {
      data: { first_name: 'String', last_name: 'String', email: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
