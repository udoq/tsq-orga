import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_COURSE_MUTATION = gql`
  mutation DeleteCourseMutation($id: String!) {
    deleteCourse(id: $id) {
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

const Course = ({ course }) => {
  const [deleteCourse] = useMutation(DELETE_COURSE_MUTATION, {
    onCompleted: () => {
      toast.success('Course deleted')
      navigate(routes.courses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete course ' + id + '?')) {
      deleteCourse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Course {course.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{course.id}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{course.category}</td>
            </tr>
            <tr>
              <th>Course type</th>
              <td>{course.course_type}</td>
            </tr>
            <tr>
              <th>Day</th>
              <td>{course.day}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{course.time}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCourse({ id: course.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(course.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Course
