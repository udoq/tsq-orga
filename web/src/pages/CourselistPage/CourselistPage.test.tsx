import { render } from '@redwoodjs/testing/web'

import CourselistPage from './CourselistPage'

describe('CourselistPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CourselistPage />)
    }).not.toThrow()
  })
})
