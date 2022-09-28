import PropTypes, { InferProps } from 'prop-types'
import { Control } from 'react-hook-form'
import { ReactElement, JSXElementConstructor } from 'react'

export const FormControllerPropTypes = {
  name: PropTypes.string.isRequired
}

export type FormControllerProps = InferProps<typeof FormControllerPropTypes> & {
  children: ReactElement<any, string | JSXElementConstructor<any>>
  control?: Control
}
