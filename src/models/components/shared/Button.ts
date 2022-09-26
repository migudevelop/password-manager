import { PropsWithChildren } from 'react'
import PropTypes, { InferProps } from 'prop-types'

export const ButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.oneOf(['primary', 'secondary', 'terciary']).isRequired
}

export type ButtonStyledProps = InferProps<typeof ButtonPropTypes>

export type ButtonProps = PropsWithChildren & ButtonStyledProps
