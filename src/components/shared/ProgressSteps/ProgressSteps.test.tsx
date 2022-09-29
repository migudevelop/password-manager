import { render, screen } from '@testing-library/react'
import ProgressSteps from './index'

describe('ProgressSteps', () => {
  test('Render component', () => {
    render(<ProgressSteps currentStep={1} maxSteps={1} />)
    expect(screen.getByText(/1/i)).toBeInTheDocument()
  })

  test('Render with 3 maxSteps', () => {
    render(<ProgressSteps currentStep={1} maxSteps={3} />)
    expect(screen.getByText(/3/i)).toBeInTheDocument()
  })

  test('Render with one step completed', () => {
    render(<ProgressSteps currentStep={2} maxSteps={3} />)
    expect(screen.getByText(/Check/i)).toBeInTheDocument()
  })
})
