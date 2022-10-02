import PropTypes, { InferProps } from 'prop-types'

export enum LoaderSpinnerSizes {
  SMALL_BUTTON = 'small',
  MEDIUM_BUTTON = 'medium',
  LARGE_BUTTON = 'large'
}

export const LoaderSpinnerPropTypes = {
  text: PropTypes.string,
  showText: PropTypes.bool,
  size: PropTypes.oneOf([
    LoaderSpinnerSizes.SMALL_BUTTON,
    LoaderSpinnerSizes.MEDIUM_BUTTON,
    LoaderSpinnerSizes.LARGE_BUTTON
  ])
}

export type LoaderSpinnerProps = InferProps<typeof LoaderSpinnerPropTypes> & {
  size?: LoaderSpinnerSizes
}

export interface SvgSpinnerStyledProps {
  size?: LoaderSpinnerSizes
}
