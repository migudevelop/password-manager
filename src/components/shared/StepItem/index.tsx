import { memo, FC } from 'react'
import { StepItemProps, StepItemPropTypes, StepState } from '@models/index'
import { StepItemStyled, StepLabelStyled } from './StepItem.styled'

const StepItem: FC<StepItemProps> = ({ children, stepState }) => {
  return (
    <StepItemStyled>
      <StepLabelStyled stepState={stepState}>{children}</StepLabelStyled>
    </StepItemStyled>
  )
}

StepItem.propTypes = StepItemPropTypes
StepItem.defaultProps = {
  stepState: StepState.CURRENT
}

export default memo(StepItem)
