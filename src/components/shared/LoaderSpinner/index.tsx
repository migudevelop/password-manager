import { memo, FC } from 'react'
import {
  LoaderSpinnerPropTypes,
  LoaderSpinnerProps,
  LoaderSpinnerSizes
} from '@models/index'
import { SvgSpinner } from '@components/index'

const LoaderSpinner: FC<LoaderSpinnerProps> = ({ size }) => (
  <SvgSpinner size={size} />
)

LoaderSpinner.prototype = LoaderSpinnerPropTypes

LoaderSpinner.defaultProps = {
  size: LoaderSpinnerSizes.SMALL_BUTTON
}

export default memo(LoaderSpinner)
