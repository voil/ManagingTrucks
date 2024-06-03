import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import TruckCard from '../components/molecules/TruckCard.vue'
import createApp from './primevue-setup'
import { useI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import type { Truck } from "@coldrun/types/src/truck";

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key
  })
}))

beforeAll(() => {
  const app = createApp({})
})


describe('TruckCard', () => {

  it('renders properly with given props', () => {
    const truck: Truck = {
      id: 1,
      name: 'Truck 1',
      description: 'This is truck 1',
      code: 'T123',
      status: 'AT_JOB'
    }

    const wrapper = mount(TruckCard, {
      props: { truck },
      global: {
        plugins: [PrimeVue],
        components: {
          Tag,
          Button
        }
      },
    })

    expect(wrapper.find('h3').text()).toBe('Truck 1')
    expect(wrapper.find('p').text()).toBe('This is truck 1')
    expect(wrapper.find('strong').text()).toBe('T123')
    expect(wrapper.findComponent({ name: 'Tag' }).props('value')).toBe('labels.statuses.at_job')
  })

  it('emits on:edit event when edit button is clicked', async () => {
    const truck: Truck = {
      id: 1,
      name: 'Truck 1',
      description: 'This is truck 1',
      code: 'T123',
      status: 'AT_JOB'
    }

    const wrapper = mount(TruckCard, {
      props: { truck },
      global: {
        plugins: [PrimeVue],
        components: {
          Tag,
          Button
        }
      },
    })

    await wrapper.find('button[data-p-severity="warning"]').trigger('click')
    expect(wrapper.emitted('on:edit')).toBeTruthy()
  })

  it('emits on:remove event when remove button is clicked', async () => {
    const truck: Truck = {
      id: 1,
      name: 'Truck 1',
      description: 'This is truck 1',
      code: 'T123',
      status: 'AT_JOB'
    }

    const wrapper = mount(TruckCard, {
      props: { truck },
      global: {
        plugins: [PrimeVue],
        components: {
          Tag,
          Button
        }
      },
    })

    await wrapper.find('button[data-p-severity="danger"]').trigger('click')
    expect(wrapper.emitted('on:remove')).toBeTruthy()
  })
})
