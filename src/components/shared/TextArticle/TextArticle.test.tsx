import { render, screen } from '@testing-library/react'
import TextArticle from './index'

describe('TextArticle', () => {
  test('Render component with contentText and without title', () => {
    render(<TextArticle contentText="testContent" />)
    expect(screen.getByText(/testContent/i)).toBeInTheDocument()
    expect(screen.queryByText(/testTitle/i)).not.toBeInTheDocument()
  })

  test('Render component with contentText and with title', () => {
    render(<TextArticle title="testTitle" contentText="testContent" />)
    expect(screen.getByText(/testContent/i)).toBeInTheDocument()
    expect(screen.getByText(/testTitle/i)).toBeInTheDocument()
  })
})
