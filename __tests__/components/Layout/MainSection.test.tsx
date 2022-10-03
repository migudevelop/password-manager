import { render, screen } from '@testing-library/react'
import { MainSection } from '@components/index'

describe('MainSection', () => {
  test('Render component', () => {
    render(
      <MainSection>
        <div>test</div>
      </MainSection>
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })

  test('Render component with title', () => {
    render(
      <MainSection title="Title Secction">
        <div>test</div>
      </MainSection>
    )
    expect(screen.getByText(/Title Secction/i)).toBeInTheDocument()
  })
})
