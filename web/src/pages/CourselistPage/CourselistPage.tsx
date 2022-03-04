import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CourselistPage = () => {
  return (
    <>
      <MetaTags title="Courselist" description="Courselist page" />

      <h1>CourselistPage</h1>
      <p>
        Find me in <code>./web/src/pages/CourselistPage/CourselistPage.tsx</code>
      </p>
      <p>
        My default route is named <code>courselist</code>, link to me with `
        <Link to={routes.courselist()}>Courselist</Link>`
      </p>
    </>
  )
}

export default CourselistPage
