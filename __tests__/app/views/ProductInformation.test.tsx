import { render, screen } from '@testing-library/react'
import { ComponentWithRedux } from '@shared/helpers/testsUtils'
import ProductInformation from '@app/views/ProductInformation/index'

describe('ProductInformation', () => {
  test('Render component', () => {
    render(
      <ComponentWithRedux>
        <ProductInformation />
      </ComponentWithRedux>
    )
    expect(screen.getByText(/Siguiente/i)).toBeInTheDocument()
  })
})
