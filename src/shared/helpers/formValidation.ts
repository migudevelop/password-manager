import { ERROR_TYPES } from '@shared/constants'

const PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

export const PASSWORD_VALIDATION = {
  required: true,
  minLength: 8,
  pattern: { value: PASSWORD_PATTERN, message: '' }
}

export const SECRET_HELP_TEXT = { maxLength: 255 }

export const obtainedErrorMessageKey = (
  type: string | undefined | null
): string => {
  switch (type) {
    case ERROR_TYPES.REQUIRED: {
      return 'isRequired'
    }
    case ERROR_TYPES.MAX_LENTH: {
      return 'maxLength'
    }
    case ERROR_TYPES.MIN_LENTH: {
      return 'minLength'
    }
    case ERROR_TYPES.PATTERN: {
      return 'notValidFormat'
    }
    default: {
      return 'notPassedTheValidation'
    }
  }
}
