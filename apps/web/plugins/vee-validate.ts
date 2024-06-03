import { defineRule, configure } from 'vee-validate'
import { required, alpha_num } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

export default defineNuxtPlugin(() => {
  defineRule('required', required)
  defineRule('alpha_num', alpha_num)
})

configure({
  generateMessage: localize('en', {
    messages: {
      required: 'This field is required',
      alpha_num: 'The field can only contain alpha numeric values'
    }
  })
})