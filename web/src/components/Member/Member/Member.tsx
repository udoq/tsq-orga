import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MEMBER_MUTATION = gql`
  mutation DeleteMemberMutation($id: String!) {
    deleteMember(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Member = ({ member }) => {
  const [deleteMember] = useMutation(DELETE_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('Member deleted')
      navigate(routes.members())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete member ' + id + '?')) {
      deleteMember({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Member {member.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{member.id}</td>
            </tr><tr>
              <th>Kd nr</th>
              <td>{member.kd_nr}</td>
            </tr><tr>
              <th>First name</th>
              <td>{member.first_name}</td>
            </tr><tr>
              <th>Last name</th>
              <td>{member.last_name}</td>
            </tr><tr>
              <th>Birthday</th>
              <td>{timeTag(member.birthday)}</td>
            </tr><tr>
              <th>Gender</th>
              <td>{member.gender}</td>
            </tr><tr>
              <th>Street</th>
              <td>{member.street}</td>
            </tr><tr>
              <th>Zipcode</th>
              <td>{member.zipcode}</td>
            </tr><tr>
              <th>City</th>
              <td>{member.city}</td>
            </tr><tr>
              <th>Phone</th>
              <td>{member.phone}</td>
            </tr><tr>
              <th>Mobil</th>
              <td>{member.mobil}</td>
            </tr><tr>
              <th>Email</th>
              <td>{member.email}</td>
            </tr><tr>
              <th>Course id</th>
              <td>{member.courseId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMember({ id: member.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(member.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Member
