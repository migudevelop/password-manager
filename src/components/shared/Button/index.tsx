import { FC, memo } from 'react'
import { ButtonStyled } from './Button.styled'
import { ButtonProps, ButtonPropTypes } from '@models/index'

const Button: FC<ButtonProps> = ({
  type,
  text,
  className,
  onClick,
  disabled
}) => (
  <ButtonStyled
    className={className}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </ButtonStyled>
)

Button.propTypes = ButtonPropTypes

Button.defaultProps = {
  className: 'primary',
  text: '',
  onClick: () => null,
  disabled: false
}

export default memo(Button)
