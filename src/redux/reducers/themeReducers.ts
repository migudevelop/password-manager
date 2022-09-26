import { LIGHT_THEME, DARK_THEME } from '@styles/themes'
import { LIGHT } from '@shared/constants'

export default {
  toogleTheme: (state) => ({
    ...state,
    theme: state.theme.name === LIGHT ? DARK_THEME : LIGHT_THEME
  })
}
