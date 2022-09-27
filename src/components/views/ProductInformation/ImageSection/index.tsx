import { memo, FC } from 'react'
import { Image } from '@components/index'
import { ImageSectionWrapper } from './ImageSection.styled'
import gearHead from '@assets/img/gear-head.svg'
import secureBox from '@assets/img/secure-box.svg'

const ImagesSection: FC = () => {
  return (
    <ImageSectionWrapper>
      <Image
        src={gearHead}
        text="Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas."
      />
      <Image
        src={secureBox}
        text="Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella."
      />
    </ImageSectionWrapper>
  )
}

export default memo(ImagesSection)
