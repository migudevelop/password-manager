import { render, screen } from '@testing-library/react'
import { ComponentWithRedux } from '@shared/helpers/testsUtils'
import Feedback from '@app/views/Feedback/index'

describe('Feedback', () => {
  test('Render component', () => {
    render(
      <ComponentWithRedux>
        <Feedback />
      </ComponentWithRedux>
    )
    expect(screen.getByText(/Estado de la solicutid/i)).toBeInTheDocument()
  })
})
