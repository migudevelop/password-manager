import {
  fireEvent,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { renderWithRedux } from '@shared/helpers/testsUtils'
import App from '@app/App'

describe('App', () => {
  test('Render component and simulate app stepts', async () => {
    renderWithRedux(<App />)
    await waitForElementToBeRemoved(() => screen.getByText(/Spinner/i))
    const nextButton = await screen.getByText(/Siguiente/i)
    expect(nextButton).toBeInTheDocument()
    await fireEvent.click(nextButton)
    await waitForElementToBeRemoved(() => screen.getByText(/Spinner/i))
    const secondPage = await screen.getByText(/Crea tu Contraseña Maestra/i)
    expect(secondPage).toBeInTheDocument()
    await fireEvent.click(screen.getByText(/Cancelar/i))
    await fireEvent.click(screen.getByText(/Siguiente/i))
    expect(
      await screen.getByText(/Crea tu Contraseña Maestra/i)
    ).toBeInTheDocument()
  })
})
