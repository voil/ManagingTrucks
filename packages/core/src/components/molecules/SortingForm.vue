<template>
  <form
    @submit="onSubmit"
    class="grid grid-cols-[max-content_1fr_1fr] md:grid-cols-[repeat(5,max-content)] justify-end items-center gap-2"
  >
    <span>{{ $t("labels.sort.title") }}</span>
    <Dropdown
      v-model="columnValue"
      :options="columns"
      option-label="name"
      option-value="column"
      :placeholder="$t('labels.column')"
      class="w-full md:w-14rem"
    />
    <Dropdown
      v-model="typeValue"
      :options="sortTypes"
      option-label="name"
      option-value="type"
      :placeholder="$t('labels.type')"
      class="w-full md:w-14rem"
    />
    <div
      class="grid grid-cols-[repeat(2,max-content)] gap-x-2 justify-end col-span-3 md:col-auto"
    >
      <Button :disabled="!columnValue || !typeValue" type="submit">{{
        $t("buttons.sort")
      }}</Button>
      <Button
        severity="secondary"
        @click="handleReset"
        :disabled="!columnValue || !typeValue"
        >{{ $t("buttons.reset") }}</Button
      >
    </div>
  </form>
</template>

<script lang="ts" setup>
import type { ManageColumnType, SortFormType } from "@coldrun/types/src/index";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useForm, useField } from "vee-validate";
import { useI18n } from "vue-i18n";

defineProps<{
  columns: ManageColumnType[];
}>();

const emit = defineEmits<{
  (e: "on:sort", params: SortFormType): void;
}>();

const { t } = useI18n();
const route = useRoute();
const query = computed(() => route.query);
const { handleSubmit } = useForm<SortFormType>();

const { value: columnValue, resetField: resetFieldColumn } = useField<string>(
  "column",
  "",
  {
    initialValue: query.value.sort ? query.value.sort.toString() : "id",
  }
);
const { value: typeValue, resetField: resetFieldType } = useField<string>(
  "type",
  "",
  {
    initialValue: query.value.order ? query.value.order.toString() : "desc",
  }
);

const sortTypes = computed(() => [
  { name: t("labels.sort.asc"), type: "asc" },
  { name: t("labels.sort.desc"), type: "desc" },
]);

const onSubmit = handleSubmit((values: SortFormType) =>
  emit("on:sort", { ...values })
);

const handleReset = () => {
  resetFieldType();
  resetFieldColumn();

  emit("on:sort", { type: undefined, column: undefined });
};
</script>
