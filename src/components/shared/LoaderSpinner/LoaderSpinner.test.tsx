import { render, screen } from '@testing-library/react'
import LoaderSpinner from './index'

describe('LoaderSpinner', () => {
  test('Render component', () => {
    render(<LoaderSpinner />)
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  })

  test('Render component with test text', () => {
    render(<LoaderSpinner text="test" />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  test('Render component without text', () => {
    render(<LoaderSpinner showText={false} />)
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument()
  })
})
