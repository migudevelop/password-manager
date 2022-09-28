import PropTypes, { InferProps } from 'prop-types'

export const FormGroupPropTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }).isRequired,
  children: PropTypes.node.isRequired
}

export type FormGroupProps = InferProps<typeof FormGroupPropTypes>
