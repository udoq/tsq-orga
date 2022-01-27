import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MembersPage = () => {
  return (
    <>
      <MetaTags title="Members" description="Members page" />

      <h1>MembersPage</h1>
      <p>
        Find me in <code>./web/src/pages/MembersPage/MembersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>members</code>, link to me with `
        <Link to={routes.members()}>Members</Link>`
      </p>
    </>
  )
}

export default MembersPage
