import PropTypes, { InferProps } from 'prop-types'

export const ImagePropTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string
}

export type ImageProps = InferProps<typeof ImagePropTypes>
