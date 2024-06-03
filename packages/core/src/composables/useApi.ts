import { useAppConfig } from "#app";
import { useNotificationStore } from '../stores/notification'

export default function useApi() {
  const appConfig = useAppConfig();
  const notificationStore = useNotificationStore();


  const errorNotify = () => {
    notificationStore.$notify({
      type: "error",
      heading: "messages.error",
      description: `messages.managing.toast.error`,
    })
    throw new Error
  }

  const $get = async <T>(endpoint: string, payload: Record<string, string>, onResponse?: (total: string | null) => void): Promise<T> => {
    const response = await $fetch<T>(`${appConfig.api.url}/${endpoint}`, {
      method: 'GET',
      params: {
        ...payload
      },
      onResponse(context) {
        if (onResponse) {
          onResponse(context.response.headers.get('x-total-count'))
        }
      },
    })

    return response
  }
  const $put = async (endpoint: string, item: Record<string, string>, payload: Record<string, string>) => {
    try {
      await $fetch(`${appConfig.api.url}/${endpoint}`, {
        method: 'PUT',
        body: {
          ...payload
        },
      })
    } catch {
      errorNotify()
    }
  }
  const $delete = async (endpoint: string, payload: Record<string, string>) => {
    try {
      return await $fetch(`${appConfig.api.url}/${endpoint}`, {
        method: 'DELETE',
      })
    } catch {
      errorNotify()
    }
  }
  const $post = async (endpoint: string, payload: Record<string, string>) => {
    try {
      await $fetch(`${appConfig.api.url}/${endpoint}`, {
        method: 'POST',
        body: {
          ...payload
        },
      })
    } catch (error) {
      errorNotify()
    }
  }

  return {
    $get,
    $put,
    $post,
    $delete
  }
}