import { MessageStatePropTypes, MessageStateProps } from '@models/index'
import { memo, FC } from 'react'
import { MessageStateWrapper } from './MessageState.styled'
import { TextArticle, MessageStateIcon } from '@components/index'
import { useTranslation } from 'react-i18next'

const MessageState: FC<MessageStateProps> = ({ state }) => {
  const { t } = useTranslation('feedback')
  return (
    <MessageStateWrapper>
      <MessageStateIcon state={state} />
      <TextArticle
        title={t(`${state}.title`)}
        contentText={t(`${state}.contentText`)}
      />
    </MessageStateWrapper>
  )
}

MessageState.propTypes = MessageStatePropTypes

export default memo(MessageState)
