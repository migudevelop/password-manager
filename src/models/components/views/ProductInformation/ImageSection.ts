import PropTypes, { InferProps } from 'prop-types'

export const ImageSectionPropTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string
}

export type ImageSectionProps = InferProps<typeof ImageSectionPropTypes>
