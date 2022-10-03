import { screen } from '@testing-library/react'
import { renderWithRedux } from '@shared/helpers/testsUtils'
import ProductInformation from '@app/views/ProductInformation/index'

describe('ProductInformation', () => {
  test('Render component', () => {
    renderWithRedux(<ProductInformation />)
    expect(screen.getByText(/Siguiente/i)).toBeInTheDocument()
  })
})
