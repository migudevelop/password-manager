import {
  act,
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { renderWithRedux } from '@shared/helpers/testsUtils'
import App from '@app/App'

const PASSWORD: string = 'passwordOK1'

const obtainedNextButton = async (): Promise<any> =>
  await waitFor(() => screen.getByText(/Siguiente/i))

describe('App', () => {
  test('Render component and simulate app stepts', async () => {
    renderWithRedux(<App />)
    await waitForElementToBeRemoved(() => screen.getByText(/Spinner/i))
    const nextButton = await obtainedNextButton()
    expect(nextButton).toBeInTheDocument()
    await fireEvent.click(nextButton)
    await waitForElementToBeRemoved(() => screen.getByText(/Spinner/i))
    const secondPage = await screen.getByText(/Crea tu Contraseña Maestra/i)
    expect(secondPage).toBeInTheDocument()
    await fireEvent.click(screen.getByText(/Cancelar/i))
    await fireEvent.click(await obtainedNextButton())
    expect(
      await screen.getByText(/Crea tu Contraseña Maestra/i)
    ).toBeInTheDocument()
    await act(async () => {
      const password = screen.getByTestId('password')
      const repeatedPassword = screen.getByTestId('repeatedPassword')
      const secretHelpText = screen.getByTestId('secretHelpText')
      await fireEvent.input(password, {
        target: { value: PASSWORD }
      })
      await waitFor(() => expect(password).toHaveValue(PASSWORD))
      await fireEvent.input(repeatedPassword, {
        target: { value: PASSWORD }
      })
      await waitFor(() => expect(repeatedPassword).toHaveValue(PASSWORD))
      await fireEvent.input(secretHelpText, {
        target: { value: PASSWORD }
      })
      await waitFor(() => expect(secretHelpText).toHaveValue(PASSWORD))
    })
    await fireEvent.click(await obtainedNextButton())
    await waitForElementToBeRemoved(() => screen.getByText(/Spinner/i), {
      timeout: 4000
    })
    expect(
      await screen.getByText(/¡Tú Password Manager ya está creado!/i)
    ).toBeInTheDocument()
    await fireEvent.click(screen.getByText(/Volver a Password Managger/i))
    expect(
      await waitFor(() => screen.getByText(/Crea tu Password Manager/i))
    ).toBeInTheDocument()
  })
})
