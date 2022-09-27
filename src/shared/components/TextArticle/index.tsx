import { memo, FC } from 'react'
import {
  ArticleWrapper,
  TitleStyled,
  ContentTextStyled
} from './TextArticle.styled'
import { TextArticleProps, TextArticlePropTypes } from '@models/index'

const TextArticle: FC<TextArticleProps> = ({ title, contentText }) => {
  return (
    <ArticleWrapper>
      <TitleStyled>{title}</TitleStyled>
      <ContentTextStyled>{contentText}</ContentTextStyled>
    </ArticleWrapper>
  )
}

TextArticle.propTypes = TextArticlePropTypes

TextArticle.defaultProps = {
  title: '',
  contentText: ''
}

export default memo(TextArticle)
