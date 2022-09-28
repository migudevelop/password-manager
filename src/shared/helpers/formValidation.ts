const PASSWORD_PATTERN = /'^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'/

export const PASSWORD_VALIDATION = {
  required: true,
  minLength: 8,
  pattern: PASSWORD_PATTERN
}
export const SECRET_HELP_TEXT = { maxLength: 255 }
