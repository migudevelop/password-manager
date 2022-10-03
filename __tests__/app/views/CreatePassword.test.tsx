import { screen } from '@testing-library/react'
import { renderWithRedux } from '@shared/helpers/testsUtils'
import CreatePassword from '@app/views/CreatePassword/index'

describe('CreatePassword', () => {
  test('Render component', () => {
    renderWithRedux(<CreatePassword />)
    expect(screen.getByText(/Siguiente/i)).toBeInTheDocument()
  })
})
