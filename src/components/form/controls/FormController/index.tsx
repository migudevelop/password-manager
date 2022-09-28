import { FC, memo, cloneElement } from 'react'
import { Controller } from 'react-hook-form'
import { FormControllerProps, FormControllerPropTypes } from '@models/index'

const FormController: FC<FormControllerProps> = ({
  children,
  control,
  name
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) =>
      cloneElement(children, { ...field, ...fieldState })
    }
  />
)

FormController.propTypes = FormControllerPropTypes

FormController.defaultProps = {
  name: ''
}

export default memo(FormController)
