import { ImagePropTypes, ImageProps } from '@models/index'
import { memo, FC } from 'react'
import { FigureStyled, ImageStyled, ImageTextStyled } from './Image.styled'

const Image: FC<ImageProps> = ({ src, text }) => {
  return (
    <FigureStyled>
      <ImageStyled src={src} />
      <ImageTextStyled>{text}</ImageTextStyled>
    </FigureStyled>
  )
}

Image.propTypes = ImagePropTypes

export default memo(Image)
