import { FC, memo } from 'react'
import { MainFooterSectionStyled } from './MainFooterSection.styled'
import { Button } from '@components/index'

const MainFooterSection: FC = () => {
  return (
    <MainFooterSectionStyled>
      <Button className="terciary" text="Cancel" onClick={() => {}} />
      <Button className="secondary" text="Seguiente" onClick={() => {}} />
    </MainFooterSectionStyled>
  )
}

export default memo(MainFooterSection)
