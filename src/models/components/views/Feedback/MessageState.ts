import PropTypes, { InferProps } from 'prop-types'

export enum MessageStates {
  SUCCESS = 'success',
  ERROR = 'error'
}

export const MessageStatePropTypes = {
  state: PropTypes.oneOf([MessageStates.SUCCESS, MessageStates.ERROR])
}

export type MessageStateProps = InferProps<typeof MessageStatePropTypes>
