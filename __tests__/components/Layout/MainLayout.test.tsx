import { render, screen } from '@testing-library/react'
import { ComponentWithRedux } from '@shared/helpers/testsUtils'
import { Layout } from '@components/index'

describe('Layout', () => {
  test('Render component', () => {
    render(
      <ComponentWithRedux>
        <Layout>
          <div>test</div>
        </Layout>
      </ComponentWithRedux>
    )
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
