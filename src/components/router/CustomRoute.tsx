import { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { RoutesValues } from '@shared/constants/index'
import { useAppState } from '@hooks/index'

const CustomRoute: FC<typeof Route> = ({
  step,
  component: Component,
  ...rest
}) => {
  const { state } = useAppState()
  return (
    <Route
      {...rest}
      render={(props) =>
        step === state?.app?.currentStep ? (
          <Component {...props} />
        ) : (
          <Redirect to={RoutesValues.HOME} />
        )
      }
    />
  )
}
export default CustomRoute
