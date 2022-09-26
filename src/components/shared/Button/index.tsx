import { FC, memo } from 'react'
import { ButtonStyled } from './Button.styled'
import { ButtonProps, ButtonPropTypes } from '@models/index'

const Button: FC<ButtonProps> = ({ text, className, onClick, disabled }) => (
  <ButtonStyled className={className} onClick={onClick} disabled={disabled}>
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
