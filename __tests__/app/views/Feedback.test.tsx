import { screen } from '@testing-library/react'
import { renderWithRedux, createInitialState } from '@shared/helpers/testsUtils'
import Feedback from '@app/views/Feedback/index'
import { MessageStates } from '@models/index'

describe('Feedback', () => {
  test('Render component', () => {
    renderWithRedux(<Feedback />)
    expect(screen.getByText(/Estado de la solicutid/i)).toBeInTheDocument()
  })

  test('Render component with loading spinner', () => {
    const initialState = createInitialState()
    renderWithRedux(<Feedback />, {
      preloadedState: {
        ...initialState,
        app: { ...initialState.app, isLoading: true }
      }
    })
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  })

  test('Render component with error message', () => {
    const initialState = createInitialState()
    renderWithRedux(<Feedback />, {
      preloadedState: {
        ...initialState,
        app: { ...initialState.app, feedbackState: MessageStates.ERROR }
      }
    })
    expect(screen.getByText(/Ha habido un error/i)).toBeInTheDocument()
  })

  test('Render component with success message', () => {
    const initialState = createInitialState()
    renderWithRedux(<Feedback />, {
      preloadedState: {
        ...initialState,
        app: { ...initialState.app, feedbackState: MessageStates.SUCCESS }
      }
    })
    expect(screen.getByText(/Check/i)).toBeInTheDocument()
  })
})
