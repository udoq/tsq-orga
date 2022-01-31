import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const members = () => {
  return db.member.findMany()
}

export const member = ({ id }: Prisma.MemberWhereUniqueInput) => {
  return db.member.findUnique({
    where: { id },
  })
}

interface CreateMemberArgs {
  input: Prisma.MemberCreateInput
}

export const createMember = ({ input }: CreateMemberArgs) => {
  return db.member.create({
    data: input,
  })
}

interface UpdateMemberArgs extends Prisma.MemberWhereUniqueInput {
  input: Prisma.MemberUpdateInput
}

export const updateMember = ({ id, input }: UpdateMemberArgs) => {
  return db.member.update({
    data: input,
    where: { id },
  })
}

export const deleteMember = ({ id }: Prisma.MemberWhereUniqueInput) => {
  return db.member.delete({
    where: { id },
  })
}

export const Member = {
  Courses: (_obj, { root }: ResolverArgs<ReturnType<typeof member>>) =>
    db.member.findUnique({ where: { id: root.id } }).Courses(),
}
