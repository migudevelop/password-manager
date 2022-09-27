import { memo, FC, PropsWithChildren } from 'react'
import { StepItemStyled, StepLabelStyled } from './StepItem.styled'

const StepItem: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StepItemStyled>
      <StepLabelStyled>{children}</StepLabelStyled>
    </StepItemStyled>
  )
}

export default memo(StepItem)
