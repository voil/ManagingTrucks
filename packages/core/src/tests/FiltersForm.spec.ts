import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import FiltersForm from '../components/molecules/FiltersForm.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Chip from 'primevue/chip'
import Toast from 'primevue/toast'
import { createTestingPinia } from '@pinia/testing'
import { useRoute } from 'vue-router'
import createApp from './primevue-setup'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    query: {
      name: 'test'
    }
  }))
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

describe('FiltersForm', () => {
  it('renders properly', () => {
    const columns = [
      { column: 'name', name: 'Name' },
      { column: 'age', name: 'Age' }
    ]

    const wrapper = mount(FiltersForm, {
      props: { columns },
      global: {
        plugins: [PrimeVue, ToastService, createTestingPinia()],
        components: {
          Dropdown,
          InputText,
          Button,
          Chip,
          Toast
        }
      }
    })

    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('emits on:filter event on form submit', async () => {
    const columns = [
      { column: 'name', name: 'Name' },
      { column: 'age', name: 'Age' }
    ]

    const wrapper = mount(FiltersForm, {
      props: { columns },
      global: {
        plugins: [PrimeVue, ToastService, createTestingPinia()],
        components: {
          Dropdown,
          InputText,
          Button,
          Chip,
          Toast
        }
      }
    })

    const input = wrapper.find('input[name="value"]')
    await input.setValue('test value')

    const form = wrapper.find('form')
    await form.trigger('submit.prevent')

    const emittedEvents = wrapper.emitted('on:filter')
    expect(emittedEvents).toBeTruthy()
  })


  it('emits on:remove event on chip remove', async () => {
    const columns = [
      { column: 'name', name: 'Name' },
      { column: 'age', name: 'Age' }
    ]

    const route = useRoute()
    route.query = { name: 'John' }

    const wrapper = mount(FiltersForm, {
      props: { columns },
      global: {
        plugins: [PrimeVue, ToastService, createTestingPinia()],
        components: {
          Dropdown,
          InputText,
          Button,
          Chip,
          Toast
        }
      }
    })

    const chip = wrapper.find('.p-chip-remove-icon')
    await chip.trigger('click')

    expect(wrapper.emitted('on:remove')).toBeTruthy()
  })
})
