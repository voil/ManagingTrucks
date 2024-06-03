<template>
  <Toast @life-end="handleCloseToast" />
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useToast } from "primevue/usetoast";
import { useNotificationStore } from "../../stores/notification";

const { t } = useI18n();
const toast = useToast();
const notificationStore = useNotificationStore();

notificationStore.$onAction(({ name, store, args, after }) => {
  after(() => {
    if (name === "$notify") {
      const notify = store.notify[store.notify.length - 1];
      toast.add({
        severity: notify.type,
        summary: t(notify.heading),
        detail: t(notify.description),
        life: 3000,
        id: notify.uid,
        closable: false,
      });
    }
  });
});

const handleCloseToast = (params: Record<string, string>) => {
  notificationStore.$remove(params.id);
};
</script>
