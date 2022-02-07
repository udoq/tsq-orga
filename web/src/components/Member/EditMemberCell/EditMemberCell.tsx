import type { EditMemberById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MemberForm from 'src/components/Member/MemberForm'

export const QUERY = gql`
  query EditMemberById($id: String!) {
    member: member(id: $id) {
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
const UPDATE_MEMBER_MUTATION = gql`
  mutation UpdateMemberMutation($id: String!, $input: UpdateMemberInput!) {
    updateMember(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ member }: CellSuccessProps<EditMemberById>) => {
  const [updateMember, { loading, error }] = useMutation(UPDATE_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('Member updated')
      navigate(routes.members())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateMember({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Member {member.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MemberForm member={member} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
