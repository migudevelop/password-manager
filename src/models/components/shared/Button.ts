import PropTypes, { InferProps } from 'prop-types'

export const ButtonPropTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.oneOf([
    'primary',
    'secondary',
    'terciary',
    'emtpy-background'
  ])
}

export type ButtonProps = InferProps<typeof ButtonPropTypes>

export type ButtonStyledProps = any
