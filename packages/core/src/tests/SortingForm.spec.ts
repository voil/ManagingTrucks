import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import PrimeVue from 'primevue/config'
import SortingForm from '../components/molecules/SortingForm.vue'
import createApp from './primevue-setup'
import { createTestingPinia } from '@pinia/testing'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'


vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    query: {},
  })),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}))


vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key
  })
}))


vi.mock('vee-validate', () => ({
  useForm: () => ({
    handleSubmit: (fn: Function) => fn
  }),
  useField: (name: string) => ({
    value: '',
    resetField: vi.fn()
  })
}))

beforeAll(() => {
  const app = createApp({})
})

describe('SortingForm', () => {
  it('renders properly', () => {
    const columns = [
      { column: 'name', name: 'Name' },
      { column: 'age', name: 'Age' }
    ]

    const wrapper = mount(SortingForm, {
      props: { columns },
      global: {
        plugins: [PrimeVue, createTestingPinia()],
        components: {
          Dropdown,
          Button
        }
      },
    })

    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('emits on:sort event on form submit', async () => {
    const columns = [
      { column: 'name', name: 'Name' },
      { column: 'age', name: 'Age' }
    ]

    const wrapper = mount(SortingForm, {
      props: { columns },
      global: {
        plugins: [PrimeVue, createTestingPinia()],
        components: {
          Dropdown,
          Button
        }
      },
    })

    const columnDropdown = wrapper.findComponent({ name: 'Dropdown' })
    await columnDropdown.setValue('name')

    const typeDropdown = wrapper.findAllComponents({ name: 'Dropdown' })[1]
    await typeDropdown.setValue('asc')

    const form = wrapper.find('form')
    await form.trigger('submit.prevent')

    const emittedEvents = wrapper.emitted('on:sort')
    expect(emittedEvents).toBeTruthy()
  })
})
