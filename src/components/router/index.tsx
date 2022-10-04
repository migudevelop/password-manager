import { FC, Suspense, lazy } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { FullPageLoader } from '@components/index'
import { RoutesValues } from '@shared/constants/index'
import CustomRoute from './CustomRoute'
const ProductInformation = lazy(
  async () => await import('@app/views/ProductInformation')
)
const CreatePassword = lazy(
  async () => await import('@app/views/CreatePassword')
)
const Feedback = lazy(async () => await import('@app/views/Feedback'))

const Routers: FC = () => {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <Switch>
        <CustomRoute
          step={1}
          exact
          path={RoutesValues.HOME}
          component={ProductInformation}
        />
        <CustomRoute
          step={2}
          path={RoutesValues.CREATE_PASSWORD}
          component={CreatePassword}
        />
        <CustomRoute
          step={3}
          path={RoutesValues.FEEDBACK}
          component={Feedback}
        />
        <Redirect to={RoutesValues.HOME} />
      </Switch>
    </Suspense>
  )
}
export default Routers
