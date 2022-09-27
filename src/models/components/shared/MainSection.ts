import PropTypes, { InferProps } from 'prop-types'

export const MainSectionPropTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export type MainSectionProps = InferProps<typeof MainSectionPropTypes>
