import { FC, memo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FormContainerPropTypes, FormContainerProps } from '@models/index'

const FormContainer: FC<FormContainerProps> = ({
  children,
  defaultValues,
  onSubmit
}) => {
  const { control, handleSubmit } = useForm<any>({ defaultValues })
  console.log('🚀 ~ file: index.tsx ~ line 11 ~ control', control)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {' '}
      <Controller
        name="firstName"
        control={control}
        render={(data) => {
          console.log({ data })
          return <label {...data}>hola</label>
        }}
      />
      {children}
    </form>
  )
}

FormContainer.propTypes = FormContainerPropTypes

FormContainer.defaultProps = {
  onSubmit: () => null,
  defaultValues: {}
}

export default memo(FormContainer)
