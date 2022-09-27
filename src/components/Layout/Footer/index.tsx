import { FC, memo } from 'react'
import { FooterWrapper } from './Footer.styled'
import { MainFooterSection } from '@components/index'
const Footer: FC = () => {
  return (
    <FooterWrapper>
      <MainFooterSection />
    </FooterWrapper>
  )
}

export default memo(Footer)
