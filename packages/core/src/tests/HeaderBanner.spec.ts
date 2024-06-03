import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HeaderBanner from '../components/molecules/HeroBanner.vue'
import Card from 'primevue/card'

describe('HeaderBanner.vue', () => {
  it('renders the title', () => {
    const title = 'Test Title'
    const wrapper = mount(HeaderBanner, {
      props: { title },
      global: {
        components: {
          Card
        }
      }
    })
    expect(wrapper.find('#cardTitle').text()).toBe(title)
  })

  it('renders the description when passed', () => {
    const title = 'Test Title'
    const description = 'Test Description'
    const wrapper = mount(HeaderBanner, {
      props: { title, description },
      global: {
        components: {
          Card
        }
      }
    })
    expect(wrapper.find('#cardDescription').exists()).toBe(true)
    expect(wrapper.find('#cardDescription').text()).toBe(description)
  })

  it('does not render the description when not passed', () => {
    const title = 'Test Title'
    const wrapper = mount(HeaderBanner, {
      props: { title },
      global: {
        components: {
          Card
        }
      }
    })
    expect(wrapper.find('#cardDescription').exists()).toBe(false)
  })
})