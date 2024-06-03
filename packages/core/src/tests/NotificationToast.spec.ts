import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import NotificationToast from '../components/atoms/NotificationToast.vue'
import { createTestingPinia } from '@pinia/testing'
import { useToast } from 'primevue/usetoast'
import { useNotificationStore } from '../stores/notification'

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

describe('NotificationToast', () => {
  it('renders properly and handles notifications', async () => {
    const pinia = createTestingPinia({ stubActions: false })
    const wrapper = mount(NotificationToast, {
      global: {
        plugins: [pinia]
      }
    })
    const notificationStore = useNotificationStore()
    const toast = useToast()


    notificationStore.notify.push({
      type: 'success',
      heading: 'test heading',
      description: 'test description',
      uid: '123'
    })

    notificationStore.$onAction.mock.calls[0][0].after()


    expect(toast.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'test heading',
      detail: 'test description',
      life: 3000,
      id: '123',
      closable: false
    })

    await wrapper.vm.handleCloseToast({ id: '123' })
    expect(notificationStore.$remove).toHaveBeenCalledWith('123')
  })
})