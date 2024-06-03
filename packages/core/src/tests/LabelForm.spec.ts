import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FormLabel from '../components/atoms/LabelForm.vue'
import SupBadge from '../components/atoms/SupBadge.vue'

describe('FormLabel.vue', () => {
  it('renders slot content', () => {
    const wrapper = mount(FormLabel, {
      slots: {
        default: '<span>Label Text</span>'
      }
    })
    expect(wrapper.html()).toContain('Label Text')
  })

  it('renders SupBadge when required is true', () => {
    const wrapper = mount(FormLabel, {
      props: {
        required: true
      },
      global: {
        components: {
          SupBadge
        }
      }
    })
    expect(wrapper.findComponent(SupBadge).exists()).toBe(true)
  })

  it('does not render SupBadge when required is false', () => {
    const wrapper = mount(FormLabel, {
      props: {
        required: false
      },
      global: {
        components: {
          SupBadge
        }
      }
    })
    expect(wrapper.findComponent(SupBadge).exists()).toBe(false)
  })
})