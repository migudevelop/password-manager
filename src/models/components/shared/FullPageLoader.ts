import PropTypes, { InferProps } from 'prop-types'

export enum LoaderSpinnerSizes {
  SMALL_BUTTON = 'small',
  MEDIUM_BUTTON = 'medium',
  LARGE_BUTTON = 'large'
}

export const LoaderSpinnerPropTypes = {
  size: PropTypes.oneOf([
    LoaderSpinnerSizes.SMALL_BUTTON,
    LoaderSpinnerSizes.MEDIUM_BUTTON,
    LoaderSpinnerSizes.LARGE_BUTTON
  ]).isRequired
}

export type LoaderSpinnerProps = InferProps<typeof LoaderSpinnerPropTypes>

export interface LoaderSpinnerStyledProps {
  size?: LoaderSpinnerSizes
}
