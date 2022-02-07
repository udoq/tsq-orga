import type { FindMembers } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Members from 'src/components/Member/Members'

export const QUERY = gql`
  query FindMembers {
    members {
      id
      kd_nr
      first_name
      last_name
      birthday
      gender
      street
      zipcode
      city
      phone
      mobil
      email
      courseId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No members yet. '}
      <Link
        to={routes.newMember()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ members }: CellSuccessProps<FindMembers>) => {
  return <Members members={members} />
}
