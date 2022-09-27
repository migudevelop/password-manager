import PropTypes, { InferProps } from 'prop-types'

export const TextArticlePropTypes = {
  title: PropTypes.string,
  contentText: PropTypes.string.isRequired
}

export type TextArticleProps = InferProps<typeof TextArticlePropTypes>
