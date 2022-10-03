import { screen } from '@testing-library/react'
import { renderWithRedux } from '@shared/helpers/testsUtils'
import { Layout } from '@components/index'

describe('Layout', () => {
  test('Render component', () => {
    renderWithRedux(
      <Layout>
        <div>test</div>
      </Layout>
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
