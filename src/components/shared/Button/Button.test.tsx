import { render, screen } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  it('renders', () => {
    render(<Button text="test" onClick={() => {}} />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
