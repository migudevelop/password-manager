import { FC, memo } from 'react'
import { SvgSpinner } from '@components/index'
import { FullPageLoaderStyled } from './FullPageLoader.styled'

const FullPageLoader: FC = () => (
  <FullPageLoaderStyled>
    <SvgSpinner />
  </FullPageLoaderStyled>
)

export default memo(FullPageLoader)
