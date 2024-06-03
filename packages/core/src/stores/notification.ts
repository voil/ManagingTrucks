
import { defineStore } from 'pinia'

interface NotificationPayload {
  uid: string
  type: 'success' | 'error',
  heading: string
  description: string
}

interface StateNotification {
  notify: NotificationPayload[]
}

export const useNotificationStore = defineStore('notification', {
  state: (): StateNotification => ({
    notify: []
  }),
  actions: {
    $notify(payload: Pick<NotificationPayload, 'type' | 'heading' | 'description'>) {
      this.notify.push({
        ...payload,
        uid: Math.random().toString(36).slice(2)
      })
    },

    $remove(id: string) {
      const index = this.notify.findIndex(notify => notify.uid === id);
      if (index !== -1) {
        this.notify.splice(index, 1);
      }
    }
  }
})