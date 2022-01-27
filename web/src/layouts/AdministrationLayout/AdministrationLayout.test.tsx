import { render } from '@redwoodjs/testing/web'

import AdministrationLayout from './AdministrationLayout'

describe('AdministrationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdministrationLayout />)
    }).not.toThrow()
  })
})
