import { render, screen } from '@testing-library/react'
import { FormGroup } from '@components/index'
import '@locale/i18next-config'

const defaultProps = {
  label: 'TestLabel',
  name: 'TestName',
  type: 'text',
  error: {}
}

describe('FormGroup', () => {
  test('should renders without problems', () => {
    render(
      <FormGroup {...defaultProps}>
        <div>test children</div>
      </FormGroup>
    )
    expect(screen.getByText('TestLabel')).toBeInTheDocument()
  })

  test('should renders with problems', () => {
    render(
      <FormGroup
        {...{ ...defaultProps, error: { type: 'maxLength', message: '' } }}
      >
        <div>test children</div>
      </FormGroup>
    )
    expect(
      screen.getByText(/TestName does have the maximun length/i)
    ).toBeInTheDocument()
  })

  test('should renders without label', () => {
    render(
      <FormGroup {...{ name: 'TestName', type: 'text', error: {} }}>
        <div>test children</div>
      </FormGroup>
    )
    expect(screen.queryByText(/TestLabel/i)).not.toBeInTheDocument()
  })
})
