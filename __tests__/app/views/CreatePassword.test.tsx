import { render, screen } from '@testing-library/react'
import { ComponentWithRedux } from '@shared/helpers/testsUtils'
import CreatePassword from '@app/views/CreatePassword/index'

describe('CreatePassword', () => {
  test('Render component', () => {
    render(
      <ComponentWithRedux>
        <CreatePassword />
      </ComponentWithRedux>
    )
    expect(screen.getByText(/Siguiente/i)).toBeInTheDocument()
  })
})
