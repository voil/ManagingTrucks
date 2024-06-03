import type { Truck } from '@coldrun/types/src/truck'
import { defineStore } from 'pinia'
import useApi from '@coldrun/core/src/composables/useApi'
import { useNotificationStore } from '@coldrun/core/src/stores/notification'


interface OptionsList {
  page: string,
  limit: string
  sort: string
  order: string
}

interface StateTruks {
  total: number | null
  trucks: Truck[],
  options?: OptionsList
}

export const useTrucksStore = defineStore('trucks', {
  state: (): StateTruks => ({
    total: null,
    trucks: [],
    options: undefined
  }),
  getters: {
    $total: (state) => state.total,
    $list: (state) => state.trucks
  },
  actions: {
    async $fetch(payload?: OptionsList) {

      if (payload) {
        this.options = payload
      }

      const api = useApi()
      const trucks = await api.$get<Truck[]>('trucks', {
        ...this.options
      }, (total: string | null) => {
        this.total = Number(total)
      })

      this.trucks = trucks
      return trucks
    },

    async $fetchOne(id: string) {
      const api = useApi()
      const truck = await api.$get<Truck>(`trucks/${id}`, {})

      return truck
    },

    async $update(id: string, payload: Pick<Truck, 'name' | 'description' | 'status'>) {
      const api = useApi()
      const notificationStore = useNotificationStore()

      try {
        await api.$put(`trucks/${id}`, {
          id
        }, {
          ...payload
        })

        notificationStore.$notify({
          type: "success",
          heading: "messages.confirmed",
          description: `messages.managing.update.toast.success`,
        });
      } catch { }
    },

    async $add(payload: Pick<Truck, 'name' | 'description' | 'status' | 'code'>) {
      const api = useApi()
      const notificationStore = useNotificationStore()

      try {
        await api.$post('trucks', {
          ...payload,
        })

        notificationStore.$notify({
          type: "success",
          heading: "messages.confirmed",
          description: `messages.managing.add.toast.success`,
        });
      } catch { }
    },

    async $delete(id: string) {
      const api = useApi()
      const notificationStore = useNotificationStore()

      try {
        await api.$delete(`trucks/${id}`, {
          id
        })
        notificationStore.$notify({
          type: "success",
          heading: "messages.confirmed",
          description: "messages.managing.remove.toast.success",
        })
      } catch { }
    },
  }
})