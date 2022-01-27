import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CoursesPage = () => {
  return (
    <>
      <MetaTags title="Courses" description="Courses page" />

      <h1>CoursesPage</h1>
      <p>
        Find me in <code>./web/src/pages/CoursesPage/CoursesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>courses</code>, link to me with `
        <Link to={routes.courses()}>Courses</Link>`
      </p>
    </>
  )
}

export default CoursesPage
