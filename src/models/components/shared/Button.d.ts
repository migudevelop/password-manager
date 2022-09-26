import { PropsWithChildren } from 'react'
import PropTypes, { InferProps } from 'prop-types'

export const ButtonPropTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.oneOf(['primary', 'secondary', 'terciary'])
}

export type ButtonStyledProps = InferProps<typeof propTypes>

export type ButtonProps = PropsWithChildren & ButtonStyledProps
