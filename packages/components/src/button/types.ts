import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini']

export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value)
    }
  },
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value)
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  icon: Boolean,
  iconPosition: String,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>