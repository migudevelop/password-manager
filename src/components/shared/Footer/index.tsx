import { FC, memo } from 'react'
import { FooterWrapper, FooterSectionStyled } from './Footer.styled'
import { Button } from '@components/index'
const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterSectionStyled>
        <Button className="terciary" text="Cancel" onClick={() => {}} />
        <Button className="secondary" text="Seguiente" onClick={() => {}} />
      </FooterSectionStyled>
    </FooterWrapper>
  )
}

export default memo(Footer)
