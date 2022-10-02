import PropTypes, { InferProps } from 'prop-types'

export const ImagePropTypes = {
  imageToDisplay: PropTypes.node.isRequired,
  text: PropTypes.string
}

export type ImageProps = InferProps<typeof ImagePropTypes>
