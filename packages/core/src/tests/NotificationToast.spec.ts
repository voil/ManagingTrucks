import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import NotificationToast from '../components/atoms/NotificationToast.vue'
import createApp from './primevue-setup'
import { createTestingPinia } from '@pinia/testing'
import { useNotificationStore } from '../stores/notification'
import { useI18n } from 'vue-i18n'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import PrimeVue from 'primevue/config'

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key
  })
}))


vi.mock('primevue/usetoast', () => ({
  useToast: () => ({
    add: vi.fn()
  })
}))

beforeAll(() => {
  const app = createApp({})
})


describe('NotificationToast', () => {
  it('renders properly', () => {
    const wrapper = mount(NotificationToast, {
      global: {
        plugins: [PrimeVue, createTestingPinia()],
        components: {
          Toast
        }
      },
    })

    expect(wrapper.findComponent({ name: 'Toast' }).exists()).toBe(true)
  })

  it('removes notification on toast life-end', async () => {
    const wrapper = mount(NotificationToast, {
      global: {
        plugins: [PrimeVue, createTestingPinia()],
        components: {
          Toast
        }
      },
    })

    const notificationStore = useNotificationStore()

    await wrapper.vm.handleCloseToast({ id: '123' })

    expect(notificationStore.$remove).toHaveBeenCalledWith('123')
  })
})
