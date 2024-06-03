import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import EmptyList from '../components/atoms/EmptyList.vue'
import IconSvg from '../components/atoms/IconSvg.vue'

describe('EmptyList.vue', () => {
  it('renders the heading', () => {
    const heading = 'Test Heading'
    const wrapper = mount(EmptyList, {
      props: { heading }
    })
    expect(wrapper.find('h3').text()).toBe(heading)
  })

  it('renders the description when passed', () => {
    const heading = 'Test Heading'
    const description = 'Test Description'
    const wrapper = mount(EmptyList, {
      props: { heading, description }
    })
    expect(wrapper.find('p').exists()).toBe(true)
    expect(wrapper.find('p').text()).toBe(description)
  })

  it('does not render the description when not passed', () => {
    const heading = 'Test Heading'
    const wrapper = mount(EmptyList, {
      props: { heading }
    })
    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('renders the IconSvg component', () => {
    const heading = 'Test Heading'
    const wrapper = mount(EmptyList, {
      props: { heading },
      global: {
        components: {
          IconSvg
        }
      }
    })
    expect(wrapper.findComponent(IconSvg).exists()).toBe(true)
  })

  it('renders the slot content', () => {
    const heading = 'Test Heading'
    const wrapper = mount(EmptyList, {
      props: { heading },
      slots: {
        additional: '<div class="additional-content">Additional Content</div>'
      }
    })
    expect(wrapper.find('.additional-content').exists()).toBe(true)
    expect(wrapper.find('.additional-content').text()).toBe('Additional Content')
  })
})