import {
  MessageStatePropTypes,
  MessageStateProps,
  MessageStates
} from '@models/index'
import { memo, FC } from 'react'
import { MessageStateIconWrapper } from './MessageStateIcon.styled'
import { SvgCheck, SvgAlert } from '@src/components/shared'

const MessageStateIcon: FC<MessageStateProps> = ({ state }) => {
  return (
    <MessageStateIconWrapper isSuccessState={state === MessageStates.SUCCESS}>
      {state === MessageStates.SUCCESS && <SvgCheck />}
      {state === MessageStates.ERROR && <SvgAlert />}
    </MessageStateIconWrapper>
  )
}

MessageStateIcon.propTypes = MessageStatePropTypes

export default memo(MessageStateIcon)
