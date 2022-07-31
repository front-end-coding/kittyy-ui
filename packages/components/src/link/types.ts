import { ExtractPropTypes } from 'vue'

export const linkProps = {
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
    default: 'default'
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: ''
  }
}


export type LinkPorps = ExtractPropTypes<typeof linkProps>
