import { render, screen } from '@testing-library/react'
import FullPageLoader from './index'

describe('FullPageLoader', () => {
  test('Render component', () => {
    render(<FullPageLoader />)
    expect(screen.getByText(/Spinner/i)).toBeInTheDocument()
  })
})
