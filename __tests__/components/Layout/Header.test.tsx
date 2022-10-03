import { render, screen } from '@testing-library/react'
import { Header } from '@components/index'

describe('Header', () => {
  test('Render component', () => {
    render(
      <Header>
        <div>test</div>
      </Header>
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
