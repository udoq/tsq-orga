import { render } from '@redwoodjs/testing/web'

import CoursesPage from './CoursesPage'

describe('CoursesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CoursesPage />)
    }).not.toThrow()
  })
})
