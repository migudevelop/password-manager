import { fireEvent, render, screen } from '@testing-library/react'
import Button from './index'

describe('Button', () => {
  test('Render component', () => {
    render(<Button text="test" onClick={() => {}} />)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  test('Call onClick function', () => {
    const fn = jest.fn()
    render(<Button text="test" onClick={fn} />)
    const btn = screen.getByText(/test/i)
    fireEvent.click(btn)
    expect(fn).toBeCalled()
  })
})
