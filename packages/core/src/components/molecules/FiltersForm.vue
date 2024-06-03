<template>
  <form @submit="onSubmit">
    <div
      class="grid grid-cols-[max-content_1fr_1fr] md:grid-cols-[repeat(5,max-content)] justify-end items-center gap-2"
    >
      <span>{{ t("labels.filter.title") }}</span>
      <Dropdown
        v-model="columnValue"
        :options="columns"
        option-label="name"
        option-value="column"
        :placeholder="t('labels.column')"
        class="w-full md:w-14rem"
      />
      <InputText
        type="text"
        v-model="inputValue"
        name="value"
        id="value"
        class="w-full"
        :placeholder="t('labels.filter.input.placeholder')"
      />
      <div
        class="grid grid-cols-[repeat(2,max-content)] gap-x-2 justify-end col-span-3 md:col-auto"
      >
        <Button :disabled="!columnValue || !inputValue" type="submit">{{
          t("buttons.filter")
        }}</Button>
      </div>
    </div>
    <div class="flex items-center mt-2 flex-wrap" v-if="filtersList.length > 0">
      <Chip
        :label="`${filter.name}:${filter.value}`"
        removable
        v-for="filter in filtersList"
        :key="filter.column"
        class="mr-2 text-sm bg-primary-100 text-white mb-2"
        @remove="handleRemoveFilter(filter)"
      />
      <Button link @click="handleReset" class="p-0 mb-2">{{
        t("buttons.filters.remove")
      }}</Button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import type {
  FilterItem,
  ManageColumnType,
  FilterFormType,
} from "@coldrun/types/src/index";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useForm, useField } from "vee-validate";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  columns: ManageColumnType[];
}>();

const emit = defineEmits<{
  (e: "on:filter", params: FilterFormType): void;
  (e: "on:remove", params: FilterFormType): void;
}>();

const route = useRoute();
const { t } = useI18n();
const query = computed(() => route.query);
const { handleSubmit } = useForm<FilterFormType>();

const { value: columnValue, resetField: resetFieldColumn } = useField<string>(
  "column",
  "",
  {
    initialValue: "",
  }
);
const { value: inputValue, resetField: resetFieldInput } = useField<string>(
  "value",
  "",
  {
    initialValue: "",
  }
);

const filtersList = computed(() =>
  props.columns
    .filter((item) => query.value[item.column])
    .map((item) => ({
      ...item,
      value: query.value[item.column],
    }))
);

const onSubmit = handleSubmit((values: FilterFormType) => {
  resetFieldInput();
  resetFieldColumn();

  emit("on:filter", { ...values });
});

const handleReset = () => {
  resetFieldInput();
  resetFieldColumn();

  emit("on:filter", { value: undefined, column: undefined });
};

const handleRemoveFilter = (filter: Pick<FilterItem, "column" | "value">) =>
  emit("on:remove", <FilterFormType>filter);
</script>
