import PropTypes, { InferProps } from 'prop-types'

export const FormContainerPropTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object
}

export type FormContainerProps = InferProps<typeof FormContainerPropTypes>
