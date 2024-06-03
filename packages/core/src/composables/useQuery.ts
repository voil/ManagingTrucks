import { useRoute, useRouter } from 'vue-router'

export default function useQuery() {
  const route = useRoute();
  const router = useRouter();

  const deleteParam = (param: string | string[]) => {
    const query = { ...route.query }

    if (Array.isArray(param)) {
      param.forEach(item => {
        if (query[item]) {
          delete query[item]
        }
      })
    } else {
      if (query[param]) {
        delete query[param]
      }
    }

    router.push({ query: { ...query } });
  }

  const addParam = (param: Record<string, string>) => {
    const query = { ...route.query, ...param }
    router.push({ query });
  }

  return {
    addParam,
    deleteParam
  }
}